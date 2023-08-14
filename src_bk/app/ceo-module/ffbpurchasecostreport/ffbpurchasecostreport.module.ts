import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FfbpurchasecostreportPageRoutingModule } from './ffbpurchasecostreport-routing.module';

import { FfbpurchasecostreportPage } from './ffbpurchasecostreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    FfbpurchasecostreportPageRoutingModule
  ],
  declarations: [FfbpurchasecostreportPage]
})
export class FfbpurchasecostreportPageModule {}
