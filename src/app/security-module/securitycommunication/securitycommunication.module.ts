import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecuritycommunicationPageRoutingModule } from './securitycommunication-routing.module';

import { SecuritycommunicationPage } from './securitycommunication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecuritycommunicationPageRoutingModule
  ],
  declarations: [SecuritycommunicationPage]
})
export class SecuritycommunicationPageModule {}
