import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderreqAddPageRoutingModule } from './orderreq-add-routing.module';

import { OrderreqAddPage } from './orderreq-add.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule,
    OrderreqAddPageRoutingModule
  ],
  declarations: [OrderreqAddPage]
})
export class OrderreqAddPageModule {}
