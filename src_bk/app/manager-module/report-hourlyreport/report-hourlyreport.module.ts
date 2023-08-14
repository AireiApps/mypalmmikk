import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportHourlyreportPageRoutingModule } from './report-hourlyreport-routing.module';

import { ReportHourlyreportPage } from './report-hourlyreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportHourlyreportPageRoutingModule
  ],
  declarations: [ReportHourlyreportPage]
})
export class ReportHourlyreportPageModule {}
