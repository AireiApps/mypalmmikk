import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceReportPageRoutingModule } from './shutdownmaintenance-report-routing.module';

import { ShutdownmaintenanceReportPage } from './shutdownmaintenance-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShutdownmaintenanceReportPageRoutingModule
  ],
  declarations: [ShutdownmaintenanceReportPage]
})
export class ShutdownmaintenanceReportPageModule {}
