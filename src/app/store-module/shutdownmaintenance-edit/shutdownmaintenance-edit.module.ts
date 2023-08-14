import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceEditPageRoutingModule } from './shutdownmaintenance-edit-routing.module';

import { ShutdownmaintenanceEditPage } from './shutdownmaintenance-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShutdownmaintenanceEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShutdownmaintenanceEditPage]
})
export class ShutdownmaintenanceEditPageModule {}
