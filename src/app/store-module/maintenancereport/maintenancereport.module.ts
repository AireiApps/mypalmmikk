import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancereportPageRoutingModule } from './maintenancereport-routing.module';

import { MaintenancereportPage } from './maintenancereport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MaintenancereportPageRoutingModule
  ],
  declarations: [MaintenancereportPage]
})
export class MaintenancereportPageModule {}
