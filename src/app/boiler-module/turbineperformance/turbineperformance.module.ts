import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurbineperformancePageRoutingModule } from './turbineperformance-routing.module';

import { TurbineperformancePage } from './turbineperformance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TurbineperformancePageRoutingModule
  ],
  declarations: [TurbineperformancePage]
})
export class TurbineperformancePageModule {}
