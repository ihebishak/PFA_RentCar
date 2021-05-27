import { Component, OnInit } from '@angular/core';
import { GetCarsService } from 'app/_services/get-cars.service';
import { Router } from '@angular/router';
import { Car } from 'app/Bean/Car';

@Component({
  selector: 'app-admin-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class AdminEditCarComponent implements OnInit {

  constructor(private getCarsService: GetCarsService, private router: Router) { }

  allCars = [];
  car : Car;
  result ;

  closeEditCarModal() {
    $("#editCar").modal("hide");
  }

  ngOnInit() {
    this.getCarsService.getAllCars()
    .subscribe(data => {
      this.allCars = data;
    });
  }
  getCarById(carId){
    this.getCarsService.getId(carId)
    .subscribe(data => this.car = data);
  }

  editCar(carId){
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
  let isBooked = (<HTMLInputElement>document.getElementById("isBooked")).value;

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
    isBooked :  Boolean(isBooked),
    id : parseInt(carId)
  };

  this.getCarsService.editCar(carId, car).subscribe(data => {
    this.result = data;

  this.getCarsService.getAllCars()
  .subscribe(data => {
    this.allCars = data;
  });

  });

  this.closeEditCarModal();
  this.router.navigateByUrl('/admin/editcar');
  }

}
