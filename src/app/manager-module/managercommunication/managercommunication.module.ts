import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagercommunicationPageRoutingModule } from './managercommunication-routing.module';

import { ManagercommunicationPage } from './managercommunication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ManagercommunicationPageRoutingModule
  ],
  declarations: [ManagercommunicationPage]
})
export class ManagercommunicationPageModule {}
