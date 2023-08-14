import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizedcommunicationreportPageRoutingModule } from './personalizedcommunicationreport-routing.module';

import { PersonalizedcommunicationreportPage } from './personalizedcommunicationreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PersonalizedcommunicationreportPageRoutingModule
  ],
  declarations: [PersonalizedcommunicationreportPage]
})
export class PersonalizedcommunicationreportPageModule {}
