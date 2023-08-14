import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineerBreakdownNewPageRoutingModule } from './engineer-breakdown-new-routing.module';

import { EngineerBreakdownNewPage } from './engineer-breakdown-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EngineerBreakdownNewPageRoutingModule
  ],
  declarations: [EngineerBreakdownNewPage]
})
export class EngineerBreakdownNewPageModule {}
