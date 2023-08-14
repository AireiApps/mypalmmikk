import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineermaintenancereportPageRoutingModule } from './engineermaintenancereport-routing.module';

import { EngineermaintenancereportPage } from './engineermaintenancereport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EngineermaintenancereportPageRoutingModule
  ],
  declarations: [EngineermaintenancereportPage]
})
export class EngineermaintenancereportPageModule {}
