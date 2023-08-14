import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerLogPageRoutingModule } from './boiler-log-routing.module';

import { BoilerLogPage } from './boiler-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoilerLogPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BoilerLogPage]
})
export class BoilerLogPageModule { }
