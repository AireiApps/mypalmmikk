import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreasingViewPageRoutingModule } from './greasing-view-routing.module';

import { GreasingViewPage } from './greasing-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreasingViewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GreasingViewPage]
})
export class GreasingViewPageModule {}
