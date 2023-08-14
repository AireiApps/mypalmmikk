import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunicationPageRoutingModule } from './communication-routing.module';

import { CommunicationPage } from './communication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CommunicationPageRoutingModule
  ],
  declarations: [CommunicationPage]
})
export class CommunicationPageModule {}
