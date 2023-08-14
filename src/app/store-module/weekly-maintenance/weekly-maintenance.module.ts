import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenancePageRoutingModule } from './weekly-maintenance-routing.module';

import { WeeklyMaintenancePage } from './weekly-maintenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyMaintenancePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [WeeklyMaintenancePage]
})
export class WeeklyMaintenancePageModule {}
