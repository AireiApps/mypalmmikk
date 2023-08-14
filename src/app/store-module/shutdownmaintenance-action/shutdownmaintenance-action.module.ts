import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceActionPageRoutingModule } from './shutdownmaintenance-action-routing.module';

import { ShutdownmaintenanceActionPage } from './shutdownmaintenance-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ShutdownmaintenanceActionPageRoutingModule
  ],
  declarations: [ShutdownmaintenanceActionPage]
})
export class ShutdownmaintenanceActionPageModule {}
