import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoryBreakdownNewPageRoutingModule } from './laboratory-breakdown-new-routing.module';

import { LaboratoryBreakdownNewPage } from './laboratory-breakdown-new.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    LaboratoryBreakdownNewPageRoutingModule
  ],
  declarations: [LaboratoryBreakdownNewPage]
})
export class LaboratoryBreakdownNewPageModule {}
