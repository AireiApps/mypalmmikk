import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockissueoncategoryreportPageRoutingModule } from './stockissueoncategoryreport-routing.module';

import { StockissueoncategoryreportPage } from './stockissueoncategoryreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StockissueoncategoryreportPageRoutingModule
  ],
  declarations: [StockissueoncategoryreportPage]
})
export class StockissueoncategoryreportPageModule {}
