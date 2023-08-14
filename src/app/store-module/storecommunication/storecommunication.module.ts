import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorecommunicationPageRoutingModule } from './storecommunication-routing.module';

import { StorecommunicationPage } from './storecommunication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorecommunicationPageRoutingModule
  ],
  declarations: [StorecommunicationPage]
})
export class StorecommunicationPageModule {}
