import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyrepairmaintenancereportPageRoutingModule } from './monthlyrepairmaintenancereport-routing.module';

import { MonthlyrepairmaintenancereportPage } from './monthlyrepairmaintenancereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MonthlyrepairmaintenancereportPageRoutingModule
  ],
  declarations: [MonthlyrepairmaintenancereportPage]
})
export class MonthlyrepairmaintenancereportPageModule {}
