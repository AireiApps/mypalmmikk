import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoPersonalizedchatPageRoutingModule } from './ceo-personalizedchat-routing.module';

import { CeoPersonalizedchatPage } from './ceo-personalizedchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CeoPersonalizedchatPageRoutingModule
  ],
  declarations: [CeoPersonalizedchatPage]
})
export class CeoPersonalizedchatPageModule {}
