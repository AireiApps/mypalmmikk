import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreOrderDetailPageRoutingModule } from './store-order-detail-routing.module';

import { StoreOrderDetailPage } from './store-order-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreOrderDetailPageRoutingModule
  ],
  declarations: [StoreOrderDetailPage]
})
export class StoreOrderDetailPageModule {}
