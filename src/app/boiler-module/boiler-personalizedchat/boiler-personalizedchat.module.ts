import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerPersonalizedchatPageRoutingModule } from './boiler-personalizedchat-routing.module';

import { BoilerPersonalizedchatPage } from './boiler-personalizedchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BoilerPersonalizedchatPageRoutingModule
  ],
  declarations: [BoilerPersonalizedchatPage]
})
export class BoilerPersonalizedchatPageModule {}
