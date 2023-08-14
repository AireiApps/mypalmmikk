import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancialstatementreportPageRoutingModule } from './financialstatementreport-routing.module';

import { FinancialstatementreportPage } from './financialstatementreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FinancialstatementreportPageRoutingModule
  ],
  declarations: [FinancialstatementreportPage]
})
export class FinancialstatementreportPageModule {}
