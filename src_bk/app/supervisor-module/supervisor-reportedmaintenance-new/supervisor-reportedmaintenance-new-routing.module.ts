import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupervisorReportedmaintenanceNewPage } from './supervisor-reportedmaintenance-new.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorReportedmaintenanceNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorReportedmaintenanceNewPageRoutingModule {}
