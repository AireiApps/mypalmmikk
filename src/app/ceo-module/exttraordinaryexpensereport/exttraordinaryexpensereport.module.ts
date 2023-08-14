import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExttraordinaryexpensereportPageRoutingModule } from './exttraordinaryexpensereport-routing.module';

import { ExttraordinaryexpensereportPage } from './exttraordinaryexpensereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ExttraordinaryexpensereportPageRoutingModule
  ],
  declarations: [ExttraordinaryexpensereportPage]
})
export class ExttraordinaryexpensereportPageModule {}
