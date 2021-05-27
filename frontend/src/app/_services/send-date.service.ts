import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendDateService {

  pickupDate : Date;
  dropDate : Date
  public dates =[];
  constructor() { }

  setDate(pickup : Date, drop : Date){
      this.pickupDate = pickup;
      this.dropDate = drop;
      this.dates[0] = this.pickupDate;
      this.dates[1] = this.dropDate;
  }

  getDate(){
    return this.dates;
  }
}
