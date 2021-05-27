import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from "app/Bean/Wallet";
import { Observable } from "rxjs";
import { WalletTransaction } from 'app/Bean/WalletTransaction';
import { Booking } from 'app/Bean/Booking';
import { Card } from 'app/Bean/Card';
import { User } from 'app/Bean/User';
import { Password } from './Bean/Password';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  updateUserPassword(user:User,userId) {
    let url = "http://localhost:8081/users/users/"+userId+"/password-reset"
    return this.http.put(url,user);
  }

  getWalletDetails(userId): Observable<Wallet> {
    let url = "http://localhost:8088/wallets/"+userId;
    return this.http.get<Wallet>(url);
  }

  getWalletTransactions(walletId): Observable<WalletTransaction[]> {
    let url = "http://localhost:8088/walletTransactions/" + walletId;
    return this.http.get<WalletTransaction[]>(url);
  }

  enterWalletTransaction(walletTransaction:WalletTransaction,walletId:Number){
    
    let url = "http://localhost:8088/walletTransactions/"+walletId;
    return this.http.post(url,walletTransaction);
  }

  getBookings(userId): Observable<Booking[]>{
    let url = "http://localhost:8083/bookings/"+userId;
    return this.http.get<Booking[]>(url);
  }

  getCards(userId): Observable<Card[]>{
    let url = "http://localhost:8085/users/"+userId+"/cards"
    return this.http.get<Card[]>(url);
  }

  updateWallet(wallet){
    let url = "http://localhost:8088/wallets/"+wallet.walletId+"transaction"
    return this.http.put(url,wallet);
  }
  getUserById(userId):Observable<User>{
    let url = "http://localhost:8081/users/"+userId;
    return this.http.get<User>(url);
  }

  updateUserById(user:User,userId){
    let url = "http://localhost:8081/users/"+userId;
    console.log(user,userId)
    return this.http.put(url,user);
  }




  deleteCardByCardId(cardId){
    let url = "http://localhost:8085/users/cards/"+cardId;
    console.log("card deleted")
     return this.http.delete(url);
  }
  updateCard(card:Card):Observable<any>{
    let userId = localStorage.getItem("userId");
    let url = "http://localhost:8085/users/"+userId+"/cards";
    return this.http.put<any>(url,card);
  }
  addCard(card:Card):Observable<Card>{
    let userId = localStorage.getItem("userId");
    let url = "http://localhost:8085/users/"+userId+"/cards";
    return this.http.post<Card>(url,card);

  }

  updatePassword(newPassword):Observable<any>{
    let userId = localStorage.getItem("userId");
    let url = "http://localhost:8081/users/users"+userId+"/password-reset"
    return this.http.put<any>(url,newPassword)
  }

}
