import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { WalletComponent } from '../wallet/wallet.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { CommonModule } from '@angular/common';

import { BankDetailsComponent } from '../bank-details/bank-details.component';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { BookingsComponent } from '../bookings/bookings.component';


const dashboard_routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent, children: [
      {
        path: "", component: ProfileComponent
      },
      {
        path: "bookings", component: BookingsComponent
      }, 
      { 
        path: 'wallet', component: WalletComponent 
      },
      { 
        path: 'change-password', component: ChangePasswordComponent 
      },
      { 
        path: 'bank-detail', component: BankDetailsComponent 
      }

    ]//, canActivate: [AuthGuard]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboard_routes)
  ],
  exports: [
  ]
})
export class DashboardRoutingRoutingModule { }
