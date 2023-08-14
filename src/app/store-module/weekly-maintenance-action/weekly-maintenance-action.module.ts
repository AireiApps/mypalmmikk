import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenanceActionPageRoutingModule } from './weekly-maintenance-action-routing.module';

import { WeeklyMaintenanceActionPage } from './weekly-maintenance-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WeeklyMaintenanceActionPageRoutingModule
  ],
  declarations: [WeeklyMaintenanceActionPage]
})
export class WeeklyMaintenanceActionPageModule {}
