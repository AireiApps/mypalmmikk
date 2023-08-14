import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradingChatPageRoutingModule } from './grading-chat-routing.module';

import { GradingChatPage } from './grading-chat.page';

import { AutosizeModule } from 'ngx-autosize';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AutosizeModule,
    GradingChatPageRoutingModule,
    TranslateModule
  ],
  declarations: [GradingChatPage]
})
export class GradingChatPageModule {}
