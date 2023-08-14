import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorecommunicationPutPageRoutingModule } from './storecommunication-put-routing.module';

import { StorecommunicationPutPage } from './storecommunication-put.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    StorecommunicationPutPageRoutingModule
  ],
  declarations: [StorecommunicationPutPage]
})
export class StorecommunicationPutPageModule {}
