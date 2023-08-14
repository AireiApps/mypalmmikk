import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerReportedmaintenanceDetailPage } from './manager-reportedmaintenance-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerReportedmaintenanceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerReportedmaintenanceDetailPageRoutingModule {}
