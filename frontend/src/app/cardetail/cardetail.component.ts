
import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
 
import {  Router } from "@angular/router";
import { Booking } from 'app/bean/Booking';
import { Car } from "app/Bean/Car";
import { CarSelectComponent } from "app/car-select/car-select.component";
import { LoginModalComponent } from "app/login-modal/login-modal.component";
import { GetCarsService } from "app/_services/get-cars.service";
import { GetLocationService } from "app/_services/get-location.service";
import { SendDateService } from "app/_services/send-date.service";
import { UploadFileComponent } from "app/upload-file/upload-file.component";
import { BookingService } from 'app/_services/booking.service';
import { User } from 'app/bean/User';


import{ TranslateService} from '@ngx-translate/core';


declare var $: any;
@Component({
  selector: "app-cardetail",
  templateUrl: "./cardetail.component.html",
  styleUrls: ["./cardetail.component.css"]
})
export class CardetailComponent implements OnInit {
  location: String;
  weekday_fare: number = 140;
  weekend_fare: number = 150;
  total_fare: number = this.weekday_fare + this.weekend_fare;
 

  isLogged: boolean;

  constructor( 
    private getCarsService: GetCarsService,
    private route: ActivatedRoute,
    private locationService: GetLocationService,
    private dateService: SendDateService,
    private bookingService : BookingService,
    private router:Router
  ) {}


  @ViewChild(UploadFileComponent, { static: false })
  upload: UploadFileComponent;
  @ViewChild(CarSelectComponent, { static: false })
  carSelect: CarSelectComponent;
  @ViewChild(LoginModalComponent, { static: false }) login: LoginModalComponent;
    bookingData:Booking = new Booking();
    

  modalState: boolean = false;
  checkBoxState: boolean = false;

  public cars: Car;

  changeState() {
    if (localStorage.length!=0 && localStorage.getItem("loginStatus")=="true") {
      if(localStorage.getItem("uploadStatus")!="true"){
      console.log("ghcwdhkh");
      this.upload.open();
      this.isLogged = true;
      }
     else{
        this.router.navigateByUrl("/car/payments");
     }
    } else {
      console.log("Not logged in");
      this.login.openModalDialog();
      this.isLogged = false;
    }
    this.bookingConfirmHandler();
  }

  sendBookingData(booking:Booking){
    this.bookingService.setBookingData(booking);
  }
  changeQuickBookState(e: any) {
    this.checkBoxState = e.target.checked;
    if (this.checkBoxState) {
      document.getElementById("quick").removeAttribute("disabled");
    } else {
      document.getElementById("quick").setAttribute("disabled", "true");
    }
  }

  bookingConfirmHandler(){
    this.bookingData.fromDate = this.pickup;
    this.bookingData.tillDate = this.drop;
    this.bookingData.bookingDate = new Date();
    this.bookingData.car = this.cars;
    this.bookingData.status=true;
    this.bookingData.userDetails=new User(localStorage.getItem("userId"));
    this.sendBookingData(this.bookingData);
  }

  id: any;
  package: any;
  carPackage: any;
  locality: any;
  dates = [];
  pickup: Date;
  drop: Date;
  month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "may",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  ngOnInit() {
    $(function() {
      $("#sortMenu a").click(function() {
        console.log("Hey!");
        $("#selected").text($(this).text());
        $("#selected").val($(this).text());
      });
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      (this.id = parseInt(params.get("modelNo"))),
        (this.package = parseInt(params.get("package")));
      console.log(this.package);
      
      this.getCarsService.getId(this.id)
      .subscribe(data => this.cars = data);
   });

    // this.getCarsService.getCarById()
    // .subscribe(data => this.cars = data);

    this.getCarsService.getCarById().subscribe(data => (this.cars = data));

    this.carPackage = this.getCarsService.getCarPackage();
    this.locality = this.locationService.getLocality();
    this.dates = this.dateService.getDate();
    this.pickup = this.dates[0];
    this.drop = this.dates[1];
    console.log("ts file date" + this.pickup + this.drop);
    console.log("service locality" + this.locality);

    // if (this.pickup.getHours() > 12) {
    //   document.getElementById("timeZone").innerHTML = "PM";
    // }
  }
}


