import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineerproductionreportPageRoutingModule } from './engineerproductionreport-routing.module';

import { EngineerproductionreportPage } from './engineerproductionreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EngineerproductionreportPageRoutingModule
  ],
  declarations: [EngineerproductionreportPage]
})
export class EngineerproductionreportPageModule {}
