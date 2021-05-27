import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'app/_services/user.service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files: any = [];
  public imagePath;
  public imagePath2;
  url:any[]=[];
  public message: string;
  buttonState:boolean=false;

  fileFront:File;
  fileBack:File;
  constructor(private userService:UserService,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  previewFront(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.url.push(reader.result); 
    }
  }
  previewBack(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.url.push(reader.result); 
    }
  }
  uploadFileFront(event,files) {
    this.fileFront =files[0];

    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
      if(this.files.length==2){
        this.buttonState=true;
      }
    }
    this.previewFront(files);  
  }

  uploadFileBack(event,files) {
    this.fileBack = files[0];
    console.log("qwerasdf:"+this.fileBack)
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
      if(this.files.length==2){
        this.buttonState=true;
      }
    }
    this.previewBack(files);  
  }
  
  deleteAttachment(index) {
    this.url.splice(index,1);
    this.files.splice(index, 1);
    if(this.files.length==2){
      this.buttonState=true;
    }
    else{
      this.buttonState=false;
    }
  }
  open(){
    console.log("child");
    document.getElementById("openModal2").click();
  }
  uploadResult;
  onFrontUpload(){
    let email:string=localStorage.getItem("email");
    var frontData=new FormData();
    frontData.append("front",this.fileFront,this.files[0]);
    frontData.append("email",email)
    this.userService.postFrontFile(frontData).subscribe(data => {
      this.uploadResult = data;
      console.log("upload:"+this.uploadResult)
      if(this.uploadResult==1){
        
        this.storage.set("uploadStatus",true);

      }
      else{
        console.log("front:gvhxuwqxuvwvxq")
      }
     
    });

  }
  onBackUpload() {
   
    var backData=new FormData();
    let email:string=localStorage.getItem("email");
    console.log(email)
    console.log("back:"+this.files[1]+" tydwy:"+this.fileBack.name);
    
    backData.append("back",this.fileBack,this.files[1]);
    backData.append("email",email);
    

    this.userService.postBackFile(backData).subscribe(data => {
      this.uploadResult = data;
      console.log("upload:"+this.uploadResult)
      if(this.uploadResult==1){
        
        this.storage.set("uploadStatus",true);

      }
      else{
        console.log("back:gvhxuwqxuvwvxq")
      }
     
    });
    }

    onUploadFile(){
      this.onBackUpload();
      this.onFrontUpload();
    }
 

  ngOnInit() {
  }
}
