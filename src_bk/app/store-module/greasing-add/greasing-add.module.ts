import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreasingAddPageRoutingModule } from './greasing-add-routing.module';

import { GreasingAddPage } from './greasing-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreasingAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GreasingAddPage]
})
export class GreasingAddPageModule {}
