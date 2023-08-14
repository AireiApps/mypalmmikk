import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorReportedmaintenanceListPage } from './supervisor-reportedmaintenance-list.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorReportedmaintenanceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorReportedmaintenanceListPageRoutingModule {}
