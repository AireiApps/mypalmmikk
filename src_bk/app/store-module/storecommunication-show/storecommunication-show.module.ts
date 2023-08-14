import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorecommunicationShowPageRoutingModule } from './storecommunication-show-routing.module';

import { StorecommunicationShowPage } from './storecommunication-show.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StorecommunicationShowPageRoutingModule
  ],
  declarations: [StorecommunicationShowPage]
})
export class StorecommunicationShowPageModule {}
