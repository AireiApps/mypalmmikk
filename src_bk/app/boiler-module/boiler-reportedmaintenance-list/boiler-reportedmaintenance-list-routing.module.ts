import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerReportedmaintenanceListPage } from './boiler-reportedmaintenance-list.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerReportedmaintenanceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerReportedmaintenanceListPageRoutingModule {}
