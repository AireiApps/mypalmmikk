import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoryReporthomePageRoutingModule } from './laboratory-reporthome-routing.module';

import { LaboratoryReporthomePage } from './laboratory-reporthome.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    LaboratoryReporthomePageRoutingModule
  ],
  declarations: [LaboratoryReporthomePage]
})
export class LaboratoryReporthomePageModule {}
