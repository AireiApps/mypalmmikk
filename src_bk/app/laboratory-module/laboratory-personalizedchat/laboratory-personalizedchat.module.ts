import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratoryPersonalizedchatPageRoutingModule } from './laboratory-personalizedchat-routing.module';

import { LaboratoryPersonalizedchatPage } from './laboratory-personalizedchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LaboratoryPersonalizedchatPageRoutingModule
  ],
  declarations: [LaboratoryPersonalizedchatPage]
})
export class LaboratoryPersonalizedchatPageModule {}
