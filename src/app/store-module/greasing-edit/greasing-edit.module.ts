import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreasingEditPageRoutingModule } from './greasing-edit-routing.module';

import { GreasingEditPage } from './greasing-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreasingEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GreasingEditPage]
})
export class GreasingEditPageModule {}
