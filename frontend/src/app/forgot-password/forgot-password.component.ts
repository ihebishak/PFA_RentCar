import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  mail="";

  constructor() { }

  ngOnInit() {
  }
  otpHandler(){
    if(this.mail=="mail@gmail.com")
      {
        
      }
    }

}
