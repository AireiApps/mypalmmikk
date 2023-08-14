import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceAddPageRoutingModule } from './shutdownmaintenance-add-routing.module';

import { ShutdownmaintenanceAddPage } from './shutdownmaintenance-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShutdownmaintenanceAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShutdownmaintenanceAddPage]
})
export class ShutdownmaintenanceAddPageModule {}
