import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChathomePageRoutingModule } from './chathome-routing.module';

import { ChathomePage } from './chathome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChathomePageRoutingModule
  ],
  declarations: [ChathomePage]
})
export class ChathomePageModule {}
