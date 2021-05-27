import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuardGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("loginStatus")=="true" && localStorage.getItem("uploadSatus")=="true"){
        return true;
    }
    else{
      this.router.navigateByUrl("");
      return false;
    }
  }
  
}
