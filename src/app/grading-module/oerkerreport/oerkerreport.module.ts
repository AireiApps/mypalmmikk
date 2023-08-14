import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OerkerreportPageRoutingModule } from './oerkerreport-routing.module';

import { OerkerreportPage } from './oerkerreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OerkerreportPageRoutingModule
  ],
  declarations: [OerkerreportPage]
})
export class OerkerreportPageModule {}
