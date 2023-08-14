import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderreqlistPageRoutingModule } from './orderreqlist-routing.module';

import { OrderreqlistPage } from './orderreqlist.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    OrderreqlistPageRoutingModule
  ],
  declarations: [OrderreqlistPage]
})
export class OrderreqlistPageModule {}
