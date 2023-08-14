import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LubricantEditPageRoutingModule } from './lubricant-edit-routing.module';

import { LubricantEditPage } from './lubricant-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LubricantEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LubricantEditPage]
})
export class LubricantEditPageModule {}
