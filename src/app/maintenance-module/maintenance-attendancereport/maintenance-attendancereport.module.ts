import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceAttendancereportPageRoutingModule } from './maintenance-attendancereport-routing.module';

import { MaintenanceAttendancereportPage } from './maintenance-attendancereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MaintenanceAttendancereportPageRoutingModule
  ],
  declarations: [MaintenanceAttendancereportPage]
})
export class MaintenanceAttendancereportPageModule {}
