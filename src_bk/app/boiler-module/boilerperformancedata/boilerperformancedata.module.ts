import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerperformancedataPageRoutingModule } from './boilerperformancedata-routing.module';

import { BoilerperformancedataPage } from './boilerperformancedata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BoilerperformancedataPageRoutingModule
  ],
  declarations: [BoilerperformancedataPage]
})
export class BoilerperformancedataPageModule {}
