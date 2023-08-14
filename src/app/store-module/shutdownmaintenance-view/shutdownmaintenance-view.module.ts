import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceViewPageRoutingModule } from './shutdownmaintenance-view-routing.module';

import { ShutdownmaintenanceViewPage } from './shutdownmaintenance-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShutdownmaintenanceViewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShutdownmaintenanceViewPage]
})
export class ShutdownmaintenanceViewPageModule {}
