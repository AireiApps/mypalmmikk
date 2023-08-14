import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SealsexpensereportPageRoutingModule } from './sealsexpensereport-routing.module';

import { SealsexpensereportPage } from './sealsexpensereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SealsexpensereportPageRoutingModule
  ],
  declarations: [SealsexpensereportPage]
})
export class SealsexpensereportPageModule {}
