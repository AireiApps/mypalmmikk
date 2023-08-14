import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LubricantViewPageRoutingModule } from './lubricant-view-routing.module';

import { LubricantViewPage } from './lubricant-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LubricantViewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LubricantViewPage]
})
export class LubricantViewPageModule {}
