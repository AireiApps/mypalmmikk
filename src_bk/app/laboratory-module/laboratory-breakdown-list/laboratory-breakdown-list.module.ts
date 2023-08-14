import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoryBreakdownListPageRoutingModule } from './laboratory-breakdown-list-routing.module';

import { LaboratoryBreakdownListPage } from './laboratory-breakdown-list.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    LaboratoryBreakdownListPageRoutingModule
  ],
  declarations: [LaboratoryBreakdownListPage]
})
export class LaboratoryBreakdownListPageModule {}
