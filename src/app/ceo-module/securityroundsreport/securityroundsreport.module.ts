import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityroundsreportPageRoutingModule } from './securityroundsreport-routing.module';

import { SecurityroundsreportPage } from './securityroundsreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SecurityroundsreportPageRoutingModule
  ],
  declarations: [SecurityroundsreportPage]
})
export class SecurityroundsreportPageModule {}
