import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportProductionreportPage } from './report-productionreport.page';

const routes: Routes = [
  {
    path: '',
    component: ReportProductionreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportProductionreportPageRoutingModule {}
