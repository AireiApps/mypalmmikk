import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerReportedmaintenanceNewPage } from './manager-reportedmaintenance-new.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerReportedmaintenanceNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerReportedmaintenanceNewPageRoutingModule {}
