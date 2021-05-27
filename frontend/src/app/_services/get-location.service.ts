import { Injectable } from '@angular/core';
import { Locations } from 'app/Bean/location';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  public location:any;
  public _url:string;
  public locality : any;

  constructor(private http:HttpClient,private cookieservice:CookieService) { }
 



  getLocation(): Observable<Locations[]> {
    this._url = "http://localhost:8084/locations/" ;
      return this.http.get<Locations[]>(this._url);
  }

  setLocality(area :any){
     this.locality = area;
     console.log("inside service set " +  this.locality);
  }

  getLocality(){
    return this.locality;
  }

}

