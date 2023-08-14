import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreasingListPageRoutingModule } from './greasing-list-routing.module';

import { GreasingListPage } from './greasing-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreasingListPageRoutingModule
  ],
  declarations: [GreasingListPage]
})
export class GreasingListPageModule {}
