import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityothervehiclePageRoutingModule } from './securityothervehicle-routing.module';

import { SecurityothervehiclePage } from './securityothervehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SecurityothervehiclePageRoutingModule
  ],
  declarations: [SecurityothervehiclePage]
})
export class SecurityothervehiclePageModule {}
