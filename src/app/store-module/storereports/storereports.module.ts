import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorereportsPageRoutingModule } from './storereports-routing.module';

import { StorereportsPage } from './storereports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorereportsPageRoutingModule
  ],
  declarations: [StorereportsPage]
})
export class StorereportsPageModule {}
