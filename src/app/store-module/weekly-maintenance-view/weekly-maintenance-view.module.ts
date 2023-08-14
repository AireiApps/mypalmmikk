import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenanceViewPageRoutingModule } from './weekly-maintenance-view-routing.module';

import { WeeklyMaintenanceViewPage } from './weekly-maintenance-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyMaintenanceViewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [WeeklyMaintenanceViewPage]
})
export class WeeklyMaintenanceViewPageModule {}
