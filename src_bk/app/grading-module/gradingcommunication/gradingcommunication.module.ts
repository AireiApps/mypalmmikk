import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradingcommunicationPageRoutingModule } from './gradingcommunication-routing.module';

import { GradingcommunicationPage } from './gradingcommunication.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradingcommunicationPageRoutingModule,
    TranslateModule,
  ],
  declarations: [GradingcommunicationPage]
})
export class GradingcommunicationPageModule {}
