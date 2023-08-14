import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryhomePageRoutingModule } from './historyhome-routing.module';

import { HistoryhomePage } from './historyhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HistoryhomePageRoutingModule
  ],
  declarations: [HistoryhomePage]
})
export class HistoryhomePageModule {}
