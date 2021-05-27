import { Component, OnInit } from '@angular/core';
import { GetCarsService } from 'app/_services/get-cars.service';
import { send } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-delete-car',
  templateUrl: './admin-delete-car.component.html',
  styleUrls: ['./admin-delete-car.component.css']
})
export class AdminDeleteCarComponent implements OnInit {

  constructor(private getCarsService: GetCarsService, private router: Router) { }

  allCars = [];
  test ;

  ngOnInit() {
    this.getCarsService.getAllCars()
    .subscribe(data => {
      this.allCars = data;
    });
  }

  deleteCar(carId){
    
   this.getCarsService.deleteCar(carId)
    .subscribe(data => {
        this.test = data;

  this.getCarsService.getAllCars()
     .subscribe(data => {
        this.allCars = data;
          });      
  });
     this.router.navigateByUrl('/admin/deletecar');
  }

 alertBox(carId){
  let confirmation =  window.confirm("Do you really want to delete ?...");
  if(confirmation){
    this.deleteCar(carId);
  }
 }
}
