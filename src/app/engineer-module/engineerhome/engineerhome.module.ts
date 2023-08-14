import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineerhomePageRoutingModule } from './engineerhome-routing.module';

import { EngineerhomePage } from './engineerhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineerhomePageRoutingModule
  ],
  declarations: [EngineerhomePage]
})
export class EngineerhomePageModule {}
