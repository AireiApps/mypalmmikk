import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FfblistPageRoutingModule } from './ffblist-routing.module';

import { FfblistPage } from './ffblist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FfblistPageRoutingModule
  ],
  declarations: [FfblistPage]
})
export class FfblistPageModule {}
