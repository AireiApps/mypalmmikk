import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradingPersonalizedchatPageRoutingModule } from './grading-personalizedchat-routing.module';

import { GradingPersonalizedchatPage } from './grading-personalizedchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GradingPersonalizedchatPageRoutingModule
  ],
  declarations: [GradingPersonalizedchatPage]
})
export class GradingPersonalizedchatPageModule {}
