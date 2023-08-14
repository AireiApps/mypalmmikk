import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerDashboardPageRoutingModule } from './manager-dashboard-routing.module';

import { ManagerDashboardPage } from './manager-dashboard.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    ManagerDashboardPageRoutingModule
  ],
  declarations: [ManagerDashboardPage]
})
export class ManagerDashboardPageModule {}
