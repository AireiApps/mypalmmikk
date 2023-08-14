import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoBroadcastchatPageRoutingModule } from './ceo-broadcastchat-routing.module';

import { CeoBroadcastchatPage } from './ceo-broadcastchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CeoBroadcastchatPageRoutingModule
  ],
  declarations: [CeoBroadcastchatPage]
})
export class CeoBroadcastchatPageModule {}
