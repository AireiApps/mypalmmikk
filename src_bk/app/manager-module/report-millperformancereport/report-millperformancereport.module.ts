import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportMillperformancereportPageRoutingModule } from './report-millperformancereport-routing.module';

import { ReportMillperformancereportPage } from './report-millperformancereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportMillperformancereportPageRoutingModule
  ],
  declarations: [ReportMillperformancereportPage]
})
export class ReportMillperformancereportPageModule {}
