import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenanceListPageRoutingModule } from './weekly-maintenance-list-routing.module';

import { WeeklyMaintenanceListPage } from './weekly-maintenance-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyMaintenanceListPageRoutingModule
  ],
  declarations: [WeeklyMaintenanceListPage]
})
export class WeeklyMaintenanceListPageModule {}
