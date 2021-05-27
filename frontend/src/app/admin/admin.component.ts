import { Component, OnInit } from '@angular/core';
import { Car } from 'app/Bean/Car';
import { GetCarsService } from 'app/_services/get-cars.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private carService : GetCarsService) { }
car : Car ;

  ngOnInit() {
  }

  closeAddCarModal() {
    $("#addCar").modal("hide");
  }
  result;

 addCar(){
  let carName = (<HTMLInputElement>document.getElementById("carName")).value;
  let location = (<HTMLInputElement>document.getElementById("location")).value;
  let city = (<HTMLInputElement>document.getElementById("city")).value;
  let bookingPrice = (<HTMLInputElement>document.getElementById("bookingPrice")).value;
  let carType = (<HTMLInputElement>document.getElementById("carType")).value;
  let fuelType = (<HTMLInputElement>document.getElementById("fuelType")).value;
  let transmissionType = (<HTMLInputElement>document.getElementById("transmissionType")).value;
  let numOfSeats = (<HTMLInputElement>document.getElementById("numOfSeats")).value;
  let pricePerKm = (<HTMLInputElement>document.getElementById("pricePerKm")).value;
  let imageUrl = (<HTMLInputElement>document.getElementById("image")).value;

  let car = {
    carName : carName,
    location: location,
    city : city,
    bookingPrice : parseInt(bookingPrice),
    carType : carType,
    fuelType :fuelType,
    transmissionType:  transmissionType,
    numOfSeats: parseInt(numOfSeats),
    pricePerKm : parseInt(pricePerKm),
    imageUrl: imageUrl,
    isBooked : false,
    id : null
  };

  this.carService.addCar(car).subscribe(data => {
    this.result = data;
  });
   this.closeAddCarModal();

 }

}
