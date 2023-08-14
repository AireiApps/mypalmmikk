import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerproductionreportPageRoutingModule } from './managerproductionreport-routing.module';

import { ManagerproductionreportPage } from './managerproductionreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ManagerproductionreportPageRoutingModule
  ],
  declarations: [ManagerproductionreportPage]
})
export class ManagerproductionreportPageModule {}
