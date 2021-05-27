import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';
import { WalletTransaction } from 'app/bean/WalletTransaction';
import { Wallet } from 'app/Bean/Wallet';
declare var $: any;

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  balance = 0.00;
  amount:number;
  walletTransactions: WalletTransaction[];
  walletTransaction:WalletTransaction = new WalletTransaction(new Date(),"","","");
  /* walletTransaction = ["credit", "debit","credit","credit","debit","credit"]; */
  walletId:number;
  userId;
  wallet:Wallet;

  constructor(private dashboardService: DashboardService) { }


  async getWalletDetails() {
    this.dashboardService.getWalletDetails(this.userId).subscribe(walletData => {
      this.balance = walletData.balance;
      this.walletId = walletData.walletId;
      this.wallet=walletData;
      console.log("wallet Id"+this.walletId)
      this.getWalletTransactions();
    })
  }

  async getWalletTransactions() {
    this.dashboardService.getWalletTransactions(this.walletId).subscribe(walletTransactionData => {
      this.walletTransactions = walletTransactionData;
      this.isTransactionRecord();
     
      /* console.log(walletTransactionData); */
    })
  }
  async isTransactionRecord(){
    if (this.walletTransactions != null) {
      document.getElementById('walletTransactionContainer').className = "wallet-transaction shadow-sm p-3 mb-5 bg-white rounded";
      /* document.getElementById('noTransaction').innerHTML = ""; */
    }
  }

  addMoneyHandler(){
  //  this.balance = this.balance+this.amount;
  //  alert(this.amount)
  
   this.walletTransaction.transactionAmount = this.amount;
   this.walletTransaction.transactionDetail = "Added Money to wallet by you"
   this.walletTransaction.transactionType = "credit";
   console.log("walletData walletId = "+this.walletId)
   this.dashboardService.enterWalletTransaction(this.walletTransaction,this.walletId).subscribe(data=>{
     console.log(data);
   });
   this.dashboardService.updateWallet(this.wallet).subscribe(data=>{
     console.log(data)
   })
   this.getWalletDetails();
  }
  ngOnInit() {
    this.getWalletDetails();
  }

}
