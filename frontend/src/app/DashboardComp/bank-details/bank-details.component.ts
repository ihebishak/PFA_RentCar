import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';
import { Card } from 'app/bean/Card';
import { User } from 'app/Bean/User';
declare var $: any;

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {


  tempexpYear = "";
  isCardSaved = true;
  cardLogo = "/assets/masterCardLogo.png"
  cardDetails:Card[];
  deleteCardId;
  editCard:Card;
  cardId="";
    cardNum="";
    cvv="";
    expMonth="";
    expYear="";
    cardHolderName="";
    tempcardNum="";
    cardLast4Digits="";
    tempexpMonth="";
 
  
  constructor(private dashboardService:DashboardService) { }

  cardController() {

  }

  showAddCardModal(){
    $('#addCardModal').modal('show')
  }


  showEditModal(item:Card) {
    console.log(item);
    $("#editCardModal").modal('show');
    this.cardNum = item.cardNum;
    this.tempcardNum = item.cardNum;
    this.cardLast4Digits= item.cardNum;
    this.expMonth  =item.expMonth;
    this.expYear = item.expYear;
    this.tempexpMonth= item.expMonth;
    this.tempexpYear=item.expYear;
    this.editCard=item;

  }

  showDeleteModal(item:Card) {
    console.log("delete" + item.cardId)
    $("#cardDeleteConfirm").modal('show');
    this.deleteCardId=item.cardId;

  }

  enableConfirmButton(value) {
    /*  console.log(value) */
    /* console.log(document.getElementById('cardNum').value) */
    if ((this.cardNum != this.tempcardNum) && (this.cardNum.length == 16))
      document.getElementById('editConfirmButton').removeAttribute('disabled')
    if (this.expMonth != this.tempexpMonth && this.expMonth.length == 2)
      document.getElementById('editConfirmButton').removeAttribute('disabled')
    if (this.expYear != this.tempexpYear && this.expYear.length == 2)
      document.getElementById('editConfirmButton').removeAttribute('disabled')
  }

  getCardDetails(userId){
    this.dashboardService.getCards(userId).subscribe(cardData=>{
      this.cardDetails=cardData;
    })
   }

   deleteCard(){
     console.log(this.deleteCardId)
    this.dashboardService.deleteCardByCardId(this.deleteCardId).subscribe(data=>{
      console.log(data);
      this.getCardDetails(localStorage.getItem("userId"));
    });
   }
   addCard(){
   
    this.dashboardService.addCard(new Card(this.cardNum, this.cvv, this.expMonth, this.expYear, this.cardHolderName, new User(1))).subscribe(data => {
      console.log("card has been added into the data base : " + data)
       
      });}

     
        
   



  ngOnInit(): void {
    this.getCardDetails(localStorage.getItem("userId"));

  }

}
