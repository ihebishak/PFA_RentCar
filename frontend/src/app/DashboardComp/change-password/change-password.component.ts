import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GetCarsService } from 'app/_services/get-cars.service';
import { DashboardService } from 'app/dashboard.service';
declare var $: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  ngOnInit() {
    this.user.userId=localStorage.getItem("userId")
    this.getUser(this.user.userId);
  }
  user:any={};

  passwordResetForm: FormGroup;
  constructor(private ggetcarService: GetCarsService,private dashboardService:DashboardService) {

  }
  async getUser(userId){
    this.dashboardService.getUserById(userId).subscribe(userData=>{
      this.user = userData;}
    )}

  
  passwordUpdateHandler(){
    $("#successModal").modal('show');
    this.dashboardService.updateUserPassword(this.user,this.user.userId).subscribe(data=>{
      console.log("Password Updated")
      $("#successModal").modal('show');
    });
  }
}
