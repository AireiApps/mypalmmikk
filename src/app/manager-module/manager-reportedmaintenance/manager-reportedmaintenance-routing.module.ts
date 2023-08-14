import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerReportedmaintenancePage } from './manager-reportedmaintenance.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerReportedmaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerReportedmaintenancePageRoutingModule {}
