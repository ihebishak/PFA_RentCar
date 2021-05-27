import { Component, OnInit, Inject } from "@angular/core";
import { UserService } from "app/_services/user.service";
import { LOCAL_STORAGE, WebStorageService } from "angular-webstorage-service";

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.css"]
})
export class LoginModalComponent implements OnInit {
  loginState: boolean = false;

  constructor(
    private userService: UserService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) {}
  openModalDialog() {
    console.log("Clicked");
    document.getElementById("openModal1").click();
  }
  ngOnInit() {}

  loginModalMsgToggle() {
    $("#loginModalMsg").modal("toggle");
  }

  isLoggedIn() {
    let status = this.getFromLocal("loginStatus");
    if (status == true) {
      this.loginState = true;
    } else {
      this.loginState = false;
    }
  }
  saveInLocal(key, val): void {
    console.log("recieved= key:" + key + "value:" + val);
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    console.log("recieved= key:" + key);
    return this.storage.get(key);
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
    let passwordReEnter = (<HTMLInputElement>(
      document.getElementById("signUpPasswordEnter")
    )).value;

    let fuel_type = (<HTMLInputElement>document.getElementById("fuelType"))
    .value;
   let transmission_type = (<HTMLInputElement>document.getElementById("transmissionType"))
    .value;
   let car_type = (<HTMLInputElement>document.getElementById("carType"))
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
      fuel_type:fuel_type,
      transmission_type:transmission_type,
      car_type:car_type
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
      newPassword: null,
      fuel_type : null,
      transmission_type : null,
      car_type:null
    };

    this.userService.userLogin(user).subscribe(data => {
      this.loginResult = data;
      console.log("login:" + this.loginResult);
      if (this.loginResult == true) {
        this.saveInLocal("email", email);
        this.saveInLocal("loginStatus", this.loginResult);
      }
      this.isLoggedIn();
      this.closeLoginModal();
      this.loginModalMsgToggle();
    });
  }
}
