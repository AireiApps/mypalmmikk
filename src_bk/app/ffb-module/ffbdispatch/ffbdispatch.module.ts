import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FfbdispatchPageRoutingModule } from './ffbdispatch-routing.module';

import { FfbdispatchPage } from './ffbdispatch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FfbdispatchPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FfbdispatchPage]
})
export class FfbdispatchPageModule { }
