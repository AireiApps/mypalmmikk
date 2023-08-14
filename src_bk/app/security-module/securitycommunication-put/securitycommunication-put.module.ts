import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecuritycommunicationPutPageRoutingModule } from './securitycommunication-put-routing.module';

import { SecuritycommunicationPutPage } from './securitycommunication-put.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SecuritycommunicationPutPageRoutingModule
  ],
  declarations: [SecuritycommunicationPutPage]
})
export class SecuritycommunicationPutPageModule {}
