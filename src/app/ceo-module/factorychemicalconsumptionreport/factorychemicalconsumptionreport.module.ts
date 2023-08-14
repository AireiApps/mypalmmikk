import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactorychemicalconsumptionreportPageRoutingModule } from './factorychemicalconsumptionreport-routing.module';

import { FactorychemicalconsumptionreportPage } from './factorychemicalconsumptionreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FactorychemicalconsumptionreportPageRoutingModule
  ],
  declarations: [FactorychemicalconsumptionreportPage]
})
export class FactorychemicalconsumptionreportPageModule {}
