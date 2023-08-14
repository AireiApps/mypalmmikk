import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancecommunicationPageRoutingModule } from './maintenancecommunication-routing.module';

import { MaintenancecommunicationPage } from './maintenancecommunication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MaintenancecommunicationPageRoutingModule
  ],
  declarations: [MaintenancecommunicationPage]
})
export class MaintenancecommunicationPageModule {}
