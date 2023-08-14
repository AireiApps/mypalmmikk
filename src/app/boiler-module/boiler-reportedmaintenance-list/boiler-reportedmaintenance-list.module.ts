import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerReportedmaintenanceListPageRoutingModule } from './boiler-reportedmaintenance-list-routing.module';

import { BoilerReportedmaintenanceListPage } from './boiler-reportedmaintenance-list.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BoilerReportedmaintenanceListPageRoutingModule
  ],
  declarations: [BoilerReportedmaintenanceListPage]
})
export class BoilerReportedmaintenanceListPageModule {}
