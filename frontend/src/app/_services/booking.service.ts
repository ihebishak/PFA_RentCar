import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Booking } from 'app/Bean/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
 bookingData:Booking;
  constructor(private http : HttpClient) { }

  getAllBookings() : Observable<Booking[]>{
    let url : string  = "http://localhost:8083/bookings";
    return this.http.get<Booking[]>(url);
  }

  addBooking(booking : Booking){
    let url : string  = "http://localhost:8083/bookings";
    return this.http.post(url,booking);
  }

  getBookingData():Booking{
    return this.bookingData;
    
  }
  setBookingData(bookingData){
    this.bookingData=bookingData;
    console.log("service booking" + this.bookingData);
  }
}
