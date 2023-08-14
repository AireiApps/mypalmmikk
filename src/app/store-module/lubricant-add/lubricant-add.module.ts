import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LubricantAddPageRoutingModule } from './lubricant-add-routing.module';

import { LubricantAddPage } from './lubricant-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LubricantAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LubricantAddPage]
})
export class LubricantAddPageModule {}
