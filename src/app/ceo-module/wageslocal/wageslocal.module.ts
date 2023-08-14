import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WageslocalPageRoutingModule } from './wageslocal-routing.module';

import { WageslocalPage } from './wageslocal.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WageslocalPageRoutingModule
  ],
  declarations: [WageslocalPage]
})
export class WageslocalPageModule {}
