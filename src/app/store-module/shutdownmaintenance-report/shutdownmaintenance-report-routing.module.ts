import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShutdownmaintenanceReportPage } from './shutdownmaintenance-report.page';

const routes: Routes = [
  {
    path: '',
    component: ShutdownmaintenanceReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShutdownmaintenanceReportPageRoutingModule {}
