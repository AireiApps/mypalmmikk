import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunicationreportPageRoutingModule } from './communicationreport-routing.module';

import { CommunicationreportPage } from './communicationreport.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CommunicationreportPageRoutingModule
  ],
  declarations: [CommunicationreportPage]
})
export class CommunicationreportPageModule {}
