import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FfbformPageRoutingModule } from './ffbform-routing.module';

import { FfbformPage } from './ffbform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FfbformPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FfbformPage]
})
export class FfbformPageModule { }
