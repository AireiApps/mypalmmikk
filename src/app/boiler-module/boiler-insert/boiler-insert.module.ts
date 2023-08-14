import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerInsertPageRoutingModule } from './boiler-insert-routing.module';

import { BoilerInsertPage } from './boiler-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoilerInsertPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BoilerInsertPage]
})
export class BoilerInsertPageModule { }
