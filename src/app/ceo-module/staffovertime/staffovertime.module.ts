import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffovertimePageRoutingModule } from './staffovertime-routing.module';

import { StaffovertimePage } from './staffovertime.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StaffovertimePageRoutingModule
  ],
  declarations: [StaffovertimePage]
})
export class StaffovertimePageModule {}
