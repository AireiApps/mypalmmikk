import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilercommunicationPutPageRoutingModule } from './boilercommunication-put-routing.module';

import { BoilercommunicationPutPage } from './boilercommunication-put.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BoilercommunicationPutPageRoutingModule
  ],
  declarations: [BoilercommunicationPutPage]
})
export class BoilercommunicationPutPageModule {}
