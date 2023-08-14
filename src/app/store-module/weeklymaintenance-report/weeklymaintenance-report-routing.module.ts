import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklymaintenanceReportPage } from './weeklymaintenance-report.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklymaintenanceReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklymaintenanceReportPageRoutingModule {}
