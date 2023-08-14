import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoryReportedmaintenaceListPageRoutingModule } from './laboratory-reportedmaintenace-list-routing.module';

import { LaboratoryReportedmaintenaceListPage } from './laboratory-reportedmaintenace-list.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    LaboratoryReportedmaintenaceListPageRoutingModule
  ],
  declarations: [LaboratoryReportedmaintenaceListPage]
})
export class LaboratoryReportedmaintenaceListPageModule {}
