import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerBroadcastchatPageRoutingModule } from './boiler-broadcastchat-routing.module';

import { BoilerBroadcastchatPage } from './boiler-broadcastchat.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    BoilerBroadcastchatPageRoutingModule
  ],
  declarations: [BoilerBroadcastchatPage]
})
export class BoilerBroadcastchatPageModule {}
