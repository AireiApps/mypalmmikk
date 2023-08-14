import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityPersonalizedchatPageRoutingModule } from './security-personalizedchat-routing.module';

import { SecurityPersonalizedchatPage } from './security-personalizedchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SecurityPersonalizedchatPageRoutingModule
  ],
  declarations: [SecurityPersonalizedchatPage]
})
export class SecurityPersonalizedchatPageModule {}
