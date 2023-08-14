import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradingcommunicationPutPageRoutingModule } from './gradingcommunication-put-routing.module';

import { GradingcommunicationPutPage } from './gradingcommunication-put.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GradingcommunicationPutPageRoutingModule
  ],
  declarations: [GradingcommunicationPutPage]
})
export class GradingcommunicationPutPageModule {}
