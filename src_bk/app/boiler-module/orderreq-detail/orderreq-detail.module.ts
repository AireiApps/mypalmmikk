import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderreqDetailPageRoutingModule } from './orderreq-detail-routing.module';

import { OrderreqDetailPage } from './orderreq-detail.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    OrderreqDetailPageRoutingModule
  ],
  declarations: [OrderreqDetailPage]
})
export class OrderreqDetailPageModule {}
