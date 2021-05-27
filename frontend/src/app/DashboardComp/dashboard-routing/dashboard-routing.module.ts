import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingRoutingModule } from './dashboard-routing-routing.module';
import { ProfileComponent } from '../profile/profile.component';

import { WalletComponent } from '../wallet/wallet.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { BankDetailsComponent } from '../bank-details/bank-details.component';
import { FormsModule } from '@angular/forms';
import { BookingsComponent } from '../bookings/bookings.component';
import { UploadComponent } from '../upload/upload.component';



@NgModule({
  declarations: [
    ProfileComponent,
    WalletComponent,
    ChangePasswordComponent,
    BankDetailsComponent,
    BookingsComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingRoutingModule,
    FormsModule
  ]
})
export class DashboardRoutingModule { }
