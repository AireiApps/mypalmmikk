import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerproductioncommentsPageRoutingModule } from './managerproductioncomments-routing.module';

import { ManagerproductioncommentsPage } from './managerproductioncomments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ManagerproductioncommentsPageRoutingModule
  ],
  declarations: [ManagerproductioncommentsPage]
})
export class ManagerproductioncommentsPageModule {}
