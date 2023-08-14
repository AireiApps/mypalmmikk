import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizecommunicationPageRoutingModule } from './personalizecommunication-routing.module';

import { PersonalizecommunicationPage } from './personalizecommunication.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PersonalizecommunicationPageRoutingModule
  ],
  declarations: [PersonalizecommunicationPage]
})
export class PersonalizecommunicationPageModule {}
