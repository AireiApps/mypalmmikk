import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineerproductioncommentsPageRoutingModule } from './engineerproductioncomments-routing.module';

import { EngineerproductioncommentsPage } from './engineerproductioncomments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EngineerproductioncommentsPageRoutingModule
  ],
  declarations: [EngineerproductioncommentsPage]
})
export class EngineerproductioncommentsPageModule {}
