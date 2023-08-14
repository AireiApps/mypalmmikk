import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilercommunicationShowPageRoutingModule } from './boilercommunication-show-routing.module';

import { BoilercommunicationShowPage } from './boilercommunication-show.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BoilercommunicationShowPageRoutingModule
  ],
  declarations: [BoilercommunicationShowPage]
})
export class BoilercommunicationShowPageModule {}
