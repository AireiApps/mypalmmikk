import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerReportedmaintenanceNewPageRoutingModule } from './boiler-reportedmaintenance-new-routing.module';

import { BoilerReportedmaintenanceNewPage } from './boiler-reportedmaintenance-new.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    BoilerReportedmaintenanceNewPageRoutingModule
  ],
  declarations: [BoilerReportedmaintenanceNewPage]
})
export class BoilerReportedmaintenanceNewPageModule {}
