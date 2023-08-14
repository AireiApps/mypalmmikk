import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoryDashboardPageRoutingModule } from './laboratory-dashboard-routing.module';

import { LaboratoryDashboardPage } from './laboratory-dashboard.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    LaboratoryDashboardPageRoutingModule
  ],
  declarations: [LaboratoryDashboardPage]
})
export class LaboratoryDashboardPageModule {}
