import { Component, OnInit } from '@angular/core';
import { Booking } from 'app/bean/Booking';
import { Wallet } from 'app/Bean/Wallet';
import { WalletTransaction } from 'app/bean/WalletTransaction';
import { DashboardService } from 'app/dashboard.service';
import { BookingService } from 'app/_services/booking.service';
import { Card } from 'app/bean/Card';
import { User } from 'app/bean/User';
import { Router } from '@angular/router';
import { GetCarsService } from 'app/_services/get-cars.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  bookingData: Booking;
  cardNumber = "";
  tempCardNumber;
  tempValidMonth;
  tempValidYear;
  validMonth;
  validYear;
  validCvv;
  validName;
  card:any={};
  totalAmount: number = 0;
  packageAmount: number = 0;
  packageDetail;


  cardHolderName = "";
  isCardDetailsEntered = true;
  showCard = false;
  isCardSaved = false;
  cards: Card[];
  cardLogo = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.wsj.net%2Fim-45496%3Fwidth%3D620%26size%3D1.5&imgrefurl=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fmastercard-drops-its-name-from-logo-11546858800&docid=McEmPa882hxj3M&tbnid=bBpiKDFGI00dOM%3A&vet=10ahUKEwjr68SO4qLlAhUSdCsKHS51DoQQMwhzKAAwAA..i&w=620&h=413&bih=528&biw=1280&q=mastercard%20logo&ved=0ahUKEwjr68SO4qLlAhUSdCsKHS51DoQQMwhzKAAwAA&iact=mrc&uact=8";

  wallet: Wallet = new Wallet();

  constructor(private dashboardService: DashboardService,
    private bookingService: BookingService, private route: Router,
    private getCarService: GetCarsService) { }

  getWalletDetails() {
    this.dashboardService.getWalletDetails(1).subscribe(walletData => {
      this.wallet = walletData;
    })
  }

  bookingHandler() {
    this.bookingData = this.bookingService.getBookingData();
    this.bookingService.addBooking(this.bookingData)
    // console.log("hello" + this.bookingData.fromDate);
    if (this.wallet.balance >= this.bookingData.car.bookingPrice)
      this.bookingService.addBooking(this.bookingData).subscribe(data => {
        console.log(this.bookingData);
        alert("Booking Confirmed")
        this.getWalletDetails()
        this.wallet.balance = this.wallet.balance-(this.bookingData.car.bookingPrice+1000);
        this.dashboardService.enterWalletTransaction(new WalletTransaction(new Date(),"debit",this.totalAmount,"booking"),1).subscribe(data=>{
          console.log(data);
        })
        this.dashboardService.updateWallet(this.wallet).subscribe(data=>{
          console.log(data)
        })
        this.route.navigateByUrl("");

      });
  }

  walletTransactionHandler(amount) {
    this.dashboardService.enterWalletTransaction(new WalletTransaction(new Date(),"debit", amount, "Booking"), this.wallet.walletId).subscribe(data=>{
      console.log(data);
      this.dashboardService.updateWallet(this.wallet).subscribe(data=>{
        this.wallet.balance=data;
      });
     this.getWalletDetails();
    })
    
  }

  paymentAndBookingHandler() {
    this.walletTransactionHandler(this.totalAmount);
    // console.log(this.bookingData.car.bookingPrice + "##########" + this.bookingData.car.bookingPrice + "##########" + this.bookingData.car.carName + "##########" + this.bookingData.car.carType + "##########" + this.bookingData.car.city + "##########" + this.bookingData.car.fuelType + "##########" + this.bookingData.car.id + "##########" + this.bookingData.car.imageUrl + "##########" + this.bookingData.car.isBooked + "##########" + this.bookingData.car.location + "##########" + this.bookingData.car.numOfSeats + "##########" + this.bookingData.car.pricePerKm + "##########" + this.bookingData.car.transmissionType + "")
    this.bookingHandler();

  }

  enableConfirmButton() {
    if ((this.cardNumber != this.tempCardNumber) && (this.cardNumber.length == 16))
      document.getElementById('editConfirmButton').removeAttribute('disabled')
    if (this.validMonth != this.tempValidMonth && this.validMonth.length == 2)
      document.getElementById('editConfirmButton').removeAttribute('disabled')
    if (this.validYear != this.tempValidYear && this.validYear.length == 2)
      document.getElementById('editConfirmButton').removeAttribute('disabled')
  }

  focusYearTab() {
    //  if (document.getElementById('creditCardExpiryMonth').value.length > 1)
    //    document.getElementById('creditCardExpiryYear').focus();
  }

  blurYearTab() {
    //  if (document.getElementById('creditCardExpiryMonth').value > 12){
    //   document.getElementById('creditCardExpiryMonth').style.border="1px red solid";}
    // else{
    // document.getElementById('creditCardExpiryMonth').style.border="1px rgba(211, 211, 211, 0.795) solid";}
  }
  cardHandler() {
    this.dashboardService.addCard(new Card(this.cardNumber, this.validCvv, this.validMonth, this.validYear, this.validName, new User(1))).subscribe(data => {
      console.log("card has been added into the data base : " + data)
    })
    this.isCardDetailsEntered = false;
    this.showCard = true;
  }

  showDeleteModal(item) {
    console.log("delete" + item)
    $("#cardDeleteConfirm").modal('show');
  }
  showEditModal(item) {
    console.log(item);
    $("#editCardModal").modal('show');
  }



  ngOnInit() {

    
    this.getWalletDetails()
    this.dashboardService.getCards(1).subscribe(data => {
      this.cards = data;
      if (this.cards != null) {

      if (this.cards.length > 0) {

        this.isCardDetailsEntered = false;
        this.showCard = false;
        this.isCardSaved = true;
      }
    }
  })
    this.packageDetail = this.getCarService.getCarPackage();
    // alert(this.packageDetail);
    if (this.packageDetail == "No-Fuel")
      this.packageAmount = 0;
    else if (this.packageDetail == "60 kms")
      this.packageAmount = 400;
    else if (this.packageDetail == "120kms")
      this.packageAmount = 700;
    else if (this.packageDetail = "180kms")
      this.packageAmount = 1050;

    this.bookingData = this.bookingService.getBookingData();
    this.totalAmount = Number.parseInt(this.bookingData.car.bookingPrice.toString()) + Number.parseInt(this.packageAmount.toString());




  }


}
