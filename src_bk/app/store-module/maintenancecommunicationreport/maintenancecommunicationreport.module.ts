import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancecommunicationreportPageRoutingModule } from './maintenancecommunicationreport-routing.module';

import { MaintenancecommunicationreportPage } from './maintenancecommunicationreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MaintenancecommunicationreportPageRoutingModule
  ],
  declarations: [MaintenancecommunicationreportPage]
})
export class MaintenancecommunicationreportPageModule {}
