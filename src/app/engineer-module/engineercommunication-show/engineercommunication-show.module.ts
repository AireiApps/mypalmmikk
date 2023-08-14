import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineercommunicationShowPageRoutingModule } from './engineercommunication-show-routing.module';

import { EngineercommunicationShowPage } from './engineercommunication-show.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    EngineercommunicationShowPageRoutingModule
  ],
  declarations: [EngineercommunicationShowPage]
})
export class EngineercommunicationShowPageModule {}
