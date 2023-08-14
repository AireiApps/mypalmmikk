import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineercommunicationPageRoutingModule } from './engineercommunication-routing.module';

import { EngineercommunicationPage } from './engineercommunication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EngineercommunicationPageRoutingModule
  ],
  declarations: [EngineercommunicationPage]
})
export class EngineercommunicationPageModule {}
