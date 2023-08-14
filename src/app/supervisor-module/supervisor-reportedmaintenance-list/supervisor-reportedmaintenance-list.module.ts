import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorReportedmaintenanceListPageRoutingModule } from './supervisor-reportedmaintenance-list-routing.module';

import { SupervisorReportedmaintenanceListPage } from './supervisor-reportedmaintenance-list.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SupervisorReportedmaintenanceListPageRoutingModule
  ],
  declarations: [SupervisorReportedmaintenanceListPage]
})
export class SupervisorReportedmaintenanceListPageModule {}
