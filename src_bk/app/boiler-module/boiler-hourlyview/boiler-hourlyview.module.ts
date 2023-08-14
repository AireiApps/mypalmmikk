import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerHourlyviewPageRoutingModule } from './boiler-hourlyview-routing.module';

import { BoilerHourlyviewPage } from './boiler-hourlyview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BoilerHourlyviewPageRoutingModule
  ],
  declarations: [BoilerHourlyviewPage]
})
export class BoilerHourlyviewPageModule {}
