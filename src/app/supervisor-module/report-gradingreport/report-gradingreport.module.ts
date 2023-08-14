import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportGradingreportPageRoutingModule } from './report-gradingreport-routing.module';

import { ReportGradingreportPage } from './report-gradingreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportGradingreportPageRoutingModule
  ],
  declarations: [ReportGradingreportPage]
})
export class ReportGradingreportPageModule {}
