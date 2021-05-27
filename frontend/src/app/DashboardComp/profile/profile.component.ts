import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';
import { User } from 'app/bean/User';
import { UploadFileComponent } from 'app/upload-file/upload-file.component';
import { UploadComponent } from '../upload/upload.component';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ngOnInit() {
    this.user.userId=localStorage.getItem("userId")
    this.getUser(this.user.userId);
  }

@ViewChild(UploadComponent,{static:false}) 
upload:UploadComponent;

  user:any={};

  constructor(private dashboardService:DashboardService) { }

  async getUser(userId){
    this.dashboardService.getUserById(userId).subscribe(userData=>{
      this.user = userData;
    
      this.uploadLicenseHandler()
    })

  }
  uploadLicenese(){
    this.upload.open();
  }
  updateUser(btnId,inputId){
    
    if(document.getElementById(btnId).innerHTML=="Edit"){
      document.getElementById(btnId).innerHTML="Save"
      document.getElementById(btnId).className="input-group-text bg-success"
      document.getElementById(inputId).removeAttribute('disabled');

      
    }
    else{
      document.getElementById(btnId).innerHTML="Edit"
      document.getElementById(inputId).setAttribute("disabled","true")
      document.getElementById(btnId).className="input-group-text bg-info"
      console.log(this.user)

      this.dashboardService.updateUserById(this.user,this.user.userId).subscribe(data=>console.log(data));
    }

    
  
    
  }
  
  uploadLicenseHandler(){
    if(this.user.frontLicenseImageUrl!=null)
    {
      document.getElementById('licenseBtn').innerHTML="<i class='fa fa-check' aria-hidden='true'></i> License Alerady Approved"
      document.getElementById('licenseBtn').setAttribute('disabled',"true")
      document.getElementById('licenseBtn').style.cursor = "not-allowed"
      
    }
  }


  

}
