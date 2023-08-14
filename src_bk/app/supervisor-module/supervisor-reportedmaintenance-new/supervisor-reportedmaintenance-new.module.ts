import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupervisorReportedmaintenanceNewPageRoutingModule } from './supervisor-reportedmaintenance-new-routing.module';

import { SupervisorReportedmaintenanceNewPage } from './supervisor-reportedmaintenance-new.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    SupervisorReportedmaintenanceNewPageRoutingModule
  ],
  declarations: [SupervisorReportedmaintenanceNewPage]
})
export class SupervisorReportedmaintenanceNewPageModule {}
