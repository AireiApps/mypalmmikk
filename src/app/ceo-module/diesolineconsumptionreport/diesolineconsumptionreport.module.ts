import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiesolineconsumptionreportPageRoutingModule } from './diesolineconsumptionreport-routing.module';

import { DiesolineconsumptionreportPage } from './diesolineconsumptionreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DiesolineconsumptionreportPageRoutingModule
  ],
  declarations: [DiesolineconsumptionreportPage]
})
export class DiesolineconsumptionreportPageModule {}
