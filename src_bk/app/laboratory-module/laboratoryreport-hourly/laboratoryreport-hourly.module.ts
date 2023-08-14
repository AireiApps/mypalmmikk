import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoryreportHourlyPageRoutingModule } from './laboratoryreport-hourly-routing.module';

import { LaboratoryreportHourlyPage } from './laboratoryreport-hourly.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LaboratoryreportHourlyPageRoutingModule
  ],
  declarations: [LaboratoryreportHourlyPage]
})
export class LaboratoryreportHourlyPageModule {}
