import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportMillperformancereportPage } from './report-millperformancereport.page';

const routes: Routes = [
  {
    path: '',
    component: ReportMillperformancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportMillperformancereportPageRoutingModule {}
