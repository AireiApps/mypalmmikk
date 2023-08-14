import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffsalaryPageRoutingModule } from './staffsalary-routing.module';

import { StaffsalaryPage } from './staffsalary.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StaffsalaryPageRoutingModule
  ],
  declarations: [StaffsalaryPage]
})
export class StaffsalaryPageModule {}
