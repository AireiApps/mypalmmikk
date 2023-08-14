import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoryGenerallabreportPageRoutingModule } from './laboratory-generallabreport-routing.module';

import { LaboratoryGenerallabreportPage } from './laboratory-generallabreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    TranslateModule,
    LaboratoryGenerallabreportPageRoutingModule
  ],
  declarations: [LaboratoryGenerallabreportPage]
})
export class LaboratoryGenerallabreportPageModule {}
