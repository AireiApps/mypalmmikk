import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineerBreakdownListPageRoutingModule } from './engineer-breakdown-list-routing.module';

import { EngineerBreakdownListPage } from './engineer-breakdown-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineerBreakdownListPageRoutingModule
  ],
  declarations: [EngineerBreakdownListPage]
})
export class EngineerBreakdownListPageModule {}
