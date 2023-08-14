import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerReportedmaintenanceNewPage } from './boiler-reportedmaintenance-new.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerReportedmaintenanceNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerReportedmaintenanceNewPageRoutingModule {}
