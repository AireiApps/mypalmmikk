import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagermaintenancereportPageRoutingModule } from './managermaintenancereport-routing.module';

import { ManagermaintenancereportPage } from './managermaintenancereport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ManagermaintenancereportPageRoutingModule
  ],
  declarations: [ManagermaintenancereportPage]
})
export class ManagermaintenancereportPageModule {}
