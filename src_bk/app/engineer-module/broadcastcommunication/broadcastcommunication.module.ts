import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroadcastcommunicationPageRoutingModule } from './broadcastcommunication-routing.module';

import { BroadcastcommunicationPage } from './broadcastcommunication.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BroadcastcommunicationPageRoutingModule
  ],
  declarations: [BroadcastcommunicationPage]
})
export class BroadcastcommunicationPageModule {}
