import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryReportedmaintenaceListPage } from './laboratory-reportedmaintenace-list.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryReportedmaintenaceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryReportedmaintenaceListPageRoutingModule {}
