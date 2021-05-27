import { Component, OnInit, Input, Output,EventEmitter } from "@angular/core";
import { GetLocationService } from 'app/_services/get-location.service';
import { CookieService } from 'ngx-cookie-service';
import { SendDateService } from 'app/_services/send-date.service';
import { GetCarsService } from 'app/_services/get-cars.service';
import { CarSelectComponent } from 'app/car-select/car-select.component';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: "app-location-header",
  templateUrl: "./location-header.component.html",
  styleUrls: ["./location-header.component.css"]
})
export class LocationHeaderComponent implements OnInit {

  private carSelect: CarSelectComponent;
  valuePickup: Date;
  valueDrop: Date;
  title = "Dummy";
  minimumDate = new Date();
  visible = false;
  public availableCars = [];
  
  @Input() public pickUp;
  @Input() public dropTime;
  @Input() public headerLocation;
  @Output() public childEvent = new EventEmitter();
  constructor(public locationService : GetLocationService, private cookieservice : CookieService,
            private dateService : SendDateService, public carService : GetCarsService,) {}

  public locations = [];
  public locality : any;
  public selectedCity ;
  ngOnInit() {

    // this.locationService.getLocationByCity().
    // subscribe(data=>
    //  {
    //   this.locations=data;
    //   console.log(this.locations);
    // });
    this.getLocality();
   
    this.valuePickup = this.pickUp;
    this.valueDrop = this.dropTime;
    console.log("location service value is "+ this.headerLocation);
    (<HTMLInputElement> document.getElementById('locationMenu')).value=this.headerLocation;
    }

  runValidations(){
    if(this.valuePickup == null || this.valueDrop == null){
      window.alert("Please select date");  
    }
    else{
        this.setDate();
        this.getAvailableCars();

    }
  }
  
  // locationSelect(){
  //   $(function() {
  //     $("#locationMenu option").click(function() {
  //       $("#selectedOption").text($(this).text());
  //       $("#selectedOption").val($(this).text());
  //       console.log("inside method")
  //     });
  //   });
  // }

  setLocality(){
 
    this.locality = (<HTMLInputElement>document.getElementById('locationMenu')).value;
     this.locationService.setLocality(this.locality);
     console.log("inside set locality"  +this.locality);
  }

  setDate(){
    console.log("inside set date");
        this.dateService.setDate(this.valuePickup  , this.valueDrop);
  }
     
  checkDate(){
    if (this.valuePickup==null) {
      alert("please select pickUp date first");
      this.visible=false;
      console.log("hello");
    } 
    else{
      this.visible = true;
    }
  }

  getAvailableCars(){
    
    this.selectedCity = this.cookieservice.get('location');
    this.carService.getCarsByAvailability(this.selectedCity)
    .subscribe(data => {
      this.availableCars = data;
      console.log(this.availableCars);
      this.childEvent.emit(this.availableCars);
    });
  }
  getLocality(){
    this.locationService.getLocation().
    subscribe(data=>
     {
      this.locations=data;
    });
  }
 
}
