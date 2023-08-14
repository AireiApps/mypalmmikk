import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerBreakdownListPageRoutingModule } from './boiler-breakdown-list-routing.module';

import { BoilerBreakdownListPage } from './boiler-breakdown-list.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BoilerBreakdownListPageRoutingModule
  ],
  declarations: [BoilerBreakdownListPage]
})
export class BoilerBreakdownListPageModule {}
