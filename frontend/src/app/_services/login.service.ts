import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean=false;
  email:string="aayush123@gmail.com";
  password:string="abc123";
  constructor() { }
  tryLogin(emailLog:any,passwordLog:any){
    if(this.email==emailLog && this.password==passwordLog){
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
    return this.isLoggedIn;

  }
}
