import { Router } from '@angular/router';
import { UserService } from "app/_services/user.service";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
  AfterViewInit,
  Output,
  EventEmitter,
  Inject
} from "@angular/core";
import { MapsAPILoader, MouseEvent } from "@agm/core";
import { LoginService } from "app/_services/login.service";
import { CookieService } from "ngx-cookie-service";
import { GetLocationService } from "app/_services/get-location.service";
import { LOCAL_STORAGE, WebStorageService } from "angular-webstorage-service";

// import {} from '@types/googlemaps';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  //  ngAfterViewInit() {
  //   this.cities = this.citiesModal.city;
  //   console.log("on init" + this.cities);
  // }

  //Sign up Code
  signUpEmail;
  signUpName;
  signUpMobile;
  signUpPassword;
  signUpRePassword;
  var = false;
  

  isEmailValid: boolean = true;

  validateEmail() {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signUpEmail)
    ) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }
  }


  isLoginValid: boolean;
  isLoginPasswordValid: boolean;

  validateLoginEmail() {
    let email = (<HTMLInputElement>document.getElementById("loginEmail")).value;
    console.log("hello" + email);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.isLoginValid = true;
    } else {
      this.isLoginValid = false;
    }
  }

  validatePassword() {
    let password = (<HTMLInputElement>document.getElementById("loginPassword"))
      .value;
    if (password.length > 0) {
      this.isLoginPasswordValid = true;
    } else {
      this.isLoginPasswordValid = false;
    }
  }

  //

  loginState: boolean;
  dislplayNav = false;
  city: any = "Bangalore";
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;

  private geoCoder;
  cookievalue: any;
  public userData: any = [];

  @Output() public childEvent = new EventEmitter();

  @ViewChild("search", { read: true, static: false })
  public searchElementRef: ElementRef;

  

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private loginServ: LoginService,
    private cookieservice: CookieService,
    private userService: UserService,
    private locationService: GetLocationService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) {}
  saveInLocal(key, val): void {
    console.log("recieved= key:" + key + "value:" + val);
    this.storage.set(key, val);
    this.userData[key] = this.storage.get(key);
  }

  getFromLocal(key): any {
    console.log("recieved= key:" + key);
    return this.storage.get(key);
  }
  displaySideNavbar() {
    console.log(this.dislplayNav);
    if (this.dislplayNav) this.dislplayNav = false;
    else this.dislplayNav = true;
  }

  isLoggedIn() {
    let status = this.getFromLocal("loginStatus");
    if (status == true) {
      this.loginState = true;
    } else {
      this.loginState = false;
    }
  }

  ngOnInit() {
    this.loginState = this.storage.get("loginStatus");
    this.cookieservice.set("location", this.city);
    this.cookievalue = this.cookieservice.get("location");
    document.getElementById("displaysidebtn").hidden = true;

  }

  


  closeModal() {
    $("#locationModal").modal("hide");
  }
  loginModalMsgToggle() {
    $("#loginModalMsg").modal("toggle");
  }
  closeSignupModal() {
    $("#signUpModal").modal("hide");
  }
  openSignupModal() {
    $("#signUpModal").modal("toggle");
  }

  closeLoginModal() {
    $("#myModal").modal("hide");
  }
  openLoginModal() {
    $("#SignUpMsg").modal("hide");
    $("#myModal").modal("toggle");
  }
  result;
  createNewUser() {
    let fullName = (<HTMLInputElement>document.getElementById("signUpName"))
      .value;
    console.log("fullname:" + fullName);
    let email = (<HTMLInputElement>document.getElementById("signUpEmail"))
      .value;
    let phone = (<HTMLInputElement>document.getElementById("signUpMobile"))
      .value;
    let password = (<HTMLInputElement>document.getElementById("signUpPassword"))
      .value;
    




    let user = {
      fullName: fullName,
      email: email,
      phone: phone,
      password: password,
      backLicenseImageUrl: null,
      frontLicenseImageUrl: null,
      userId: null,
      newPassword:null,
     
    };

    this.userService.adduser(user).subscribe(data => {
      this.result = data;
      $("#SignUpMsg").modal("toggle");
    });
    this.closeSignupModal();
  }

  loginResult: Boolean;
  userLogin() {
    let email = (<HTMLInputElement>document.getElementById("loginEmail")).value;

    let password = (<HTMLInputElement>document.getElementById("loginPassword"))
      .value;

    let user = {
      fullName: null,
      email: email,
      phone: null,
      password: password,
      backLicenseImageUrl: null,
      frontLicenseImageUrl: null,
      userId: null,
      newPassword:null,
    
    };

    this.userService.userLogin(user).subscribe((data:any) => {
      console.log(data)

      if (data) {
        localStorage.setItem("userId",data.userId)
        localStorage.setItem("name",data.fullName)
        this.saveInLocal("loginStatus",true)
     
      }
      else{
        this.saveInLocal("loginStatus",false)
      }
      this.isLoggedIn();
      this.closeSignupModal();
      this.closeLoginModal();
      this.loginModalMsgToggle();
      this.userService.getUserId().subscribe(data=>{
        this.saveInLocal("userId",data);
      })
    });
  }
  hideSideNavbar() {
    this.dislplayNav = false;
  }
}
