import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklymaintenanceReportPageRoutingModule } from './weeklymaintenance-report-routing.module';

import { WeeklymaintenanceReportPage } from './weeklymaintenance-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklymaintenanceReportPageRoutingModule
  ],
  declarations: [WeeklymaintenanceReportPage]
})
export class WeeklymaintenanceReportPageModule {}
