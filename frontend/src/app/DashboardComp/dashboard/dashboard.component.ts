import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/_services/user.service';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName:""

  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.userService.logout();
    $("#logoutModalMsg").modal("toggle");
    
    
  }

  redirectAfterLogout(){
    this.router.navigateByUrl("");
  }
}
