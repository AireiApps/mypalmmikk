import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportBoilerlogreportPageRoutingModule } from './report-boilerlogreport-routing.module';

import { ReportBoilerlogreportPage } from './report-boilerlogreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportBoilerlogreportPageRoutingModule
  ],
  declarations: [ReportBoilerlogreportPage]
})
export class ReportBoilerlogreportPageModule {}
