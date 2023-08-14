import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorestatusupdatePageRoutingModule } from './storestatusupdate-routing.module';

import { StorestatusupdatePage } from './storestatusupdate.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StorestatusupdatePageRoutingModule
  ],
  declarations: [StorestatusupdatePage]
})
export class StorestatusupdatePageModule {}
