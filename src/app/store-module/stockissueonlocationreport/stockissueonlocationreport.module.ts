import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockissueonlocationreportPageRoutingModule } from './stockissueonlocationreport-routing.module';

import { StockissueonlocationreportPage } from './stockissueonlocationreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StockissueonlocationreportPageRoutingModule
  ],
  declarations: [StockissueonlocationreportPage]
})
export class StockissueonlocationreportPageModule {}
