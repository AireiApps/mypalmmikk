import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportProductionreportPageRoutingModule } from './report-productionreport-routing.module';

import { ReportProductionreportPage } from './report-productionreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReportProductionreportPageRoutingModule
  ],
  declarations: [ReportProductionreportPage]
})
export class ReportProductionreportPageModule {}
