import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockissueonstationreportPageRoutingModule } from './stockissueonstationreport-routing.module';

import { StockissueonstationreportPage } from './stockissueonstationreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StockissueonstationreportPageRoutingModule
  ],
  declarations: [StockissueonstationreportPage]
})
export class StockissueonstationreportPageModule {}
