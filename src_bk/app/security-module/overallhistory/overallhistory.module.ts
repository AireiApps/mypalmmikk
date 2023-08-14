import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverallhistoryPageRoutingModule } from './overallhistory-routing.module';

import { OverallhistoryPage } from './overallhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OverallhistoryPageRoutingModule
  ],
  declarations: [OverallhistoryPage]
})
export class OverallhistoryPageModule {}
