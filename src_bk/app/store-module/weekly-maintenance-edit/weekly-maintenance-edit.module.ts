import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenanceEditPageRoutingModule } from './weekly-maintenance-edit-routing.module';

import { WeeklyMaintenanceEditPage } from './weekly-maintenance-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyMaintenanceEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [WeeklyMaintenanceEditPage]
})
export class WeeklyMaintenanceEditPageModule {}
