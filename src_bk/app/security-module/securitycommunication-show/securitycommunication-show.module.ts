import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecuritycommunicationShowPageRoutingModule } from './securitycommunication-show-routing.module';

import { SecuritycommunicationShowPage } from './securitycommunication-show.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SecuritycommunicationShowPageRoutingModule
  ],
  declarations: [SecuritycommunicationShowPage]
})
export class SecuritycommunicationShowPageModule {}
