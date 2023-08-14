import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractexpensereportPageRoutingModule } from './abstractexpensereport-routing.module';

import { AbstractexpensereportPage } from './abstractexpensereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AbstractexpensereportPageRoutingModule
  ],
  declarations: [AbstractexpensereportPage]
})
export class AbstractexpensereportPageModule {}
