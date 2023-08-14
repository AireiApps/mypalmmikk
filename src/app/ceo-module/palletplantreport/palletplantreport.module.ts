import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PalletplantreportPageRoutingModule } from './palletplantreport-routing.module';

import { PalletplantreportPage } from './palletplantreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PalletplantreportPageRoutingModule
  ],
  declarations: [PalletplantreportPage]
})
export class PalletplantreportPageModule {}
