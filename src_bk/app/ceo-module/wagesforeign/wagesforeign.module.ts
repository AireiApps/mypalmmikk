import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WagesforeignPageRoutingModule } from './wagesforeign-routing.module';

import { WagesforeignPage } from './wagesforeign.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WagesforeignPageRoutingModule
  ],
  declarations: [WagesforeignPage]
})
export class WagesforeignPageModule {}
