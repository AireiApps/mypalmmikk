import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradingcommunicationShowPageRoutingModule } from './gradingcommunication-show-routing.module';

import { GradingcommunicationShowPage } from './gradingcommunication-show.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GradingcommunicationShowPageRoutingModule
  ],
  declarations: [GradingcommunicationShowPage]
})
export class GradingcommunicationShowPageModule {}
