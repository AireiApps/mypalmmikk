import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionturnoverreportPageRoutingModule } from './productionturnoverreport-routing.module';

import { ProductionturnoverreportPage } from './productionturnoverreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProductionturnoverreportPageRoutingModule
  ],
  declarations: [ProductionturnoverreportPage]
})
export class ProductionturnoverreportPageModule {}
