import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorychemicalreportPageRoutingModule } from './laboratorychemicalreport-routing.module';

import { LaboratorychemicalreportPage } from './laboratorychemicalreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    LaboratorychemicalreportPageRoutingModule
  ],
  declarations: [LaboratorychemicalreportPage]
})
export class LaboratorychemicalreportPageModule {}
