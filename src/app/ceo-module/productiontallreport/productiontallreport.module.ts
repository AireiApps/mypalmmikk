import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductiontallreportPageRoutingModule } from './productiontallreport-routing.module';

import { ProductiontallreportPage } from './productiontallreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProductiontallreportPageRoutingModule
  ],
  declarations: [ProductiontallreportPage]
})
export class ProductiontallreportPageModule {}
