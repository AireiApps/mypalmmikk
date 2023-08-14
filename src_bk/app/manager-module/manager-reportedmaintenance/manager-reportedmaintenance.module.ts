import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerReportedmaintenancePageRoutingModule } from './manager-reportedmaintenance-routing.module';

import { ManagerReportedmaintenancePage } from './manager-reportedmaintenance.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ManagerReportedmaintenancePageRoutingModule
  ],
  declarations: [ManagerReportedmaintenancePage]
})
export class ManagerReportedmaintenancePageModule {}
