import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LubricantListPageRoutingModule } from './lubricant-list-routing.module';

import { LubricantListPage } from './lubricant-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LubricantListPageRoutingModule
  ],
  declarations: [LubricantListPage]
})
export class LubricantListPageModule {}
