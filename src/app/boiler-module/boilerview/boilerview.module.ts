import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoilerviewPageRoutingModule } from './boilerview-routing.module';

import { BoilerviewPage } from './boilerview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BoilerviewPageRoutingModule
  ],
  declarations: [BoilerviewPage]
})
export class BoilerviewPageModule {}
