import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineerDashboardPageRoutingModule } from './engineer-dashboard-routing.module';

import { EngineerDashboardPage } from './engineer-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EngineerDashboardPageRoutingModule
  ],
  declarations: [EngineerDashboardPage]
})
export class EngineerDashboardPageModule {}
