import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerReportedmaintenanceNewPageRoutingModule } from './manager-reportedmaintenance-new-routing.module';

import { ManagerReportedmaintenanceNewPage } from './manager-reportedmaintenance-new.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    ManagerReportedmaintenanceNewPageRoutingModule
  ],
  declarations: [ManagerReportedmaintenanceNewPage]
})
export class ManagerReportedmaintenanceNewPageModule {}
