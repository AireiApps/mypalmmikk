import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTransPageRoutingModule } from './detail-trans-routing.module';

import { DetailTransPage } from './detail-trans.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTransPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [DetailTransPage]
})
export class DetailTransPageModule { }
