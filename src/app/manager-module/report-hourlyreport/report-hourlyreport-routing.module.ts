import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportHourlyreportPage } from './report-hourlyreport.page';

const routes: Routes = [
  {
    path: '',
    component: ReportHourlyreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportHourlyreportPageRoutingModule {}
