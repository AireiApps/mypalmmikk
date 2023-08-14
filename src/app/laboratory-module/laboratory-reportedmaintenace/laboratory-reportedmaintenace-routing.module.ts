import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryReportedmaintenacePage } from './laboratory-reportedmaintenace.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryReportedmaintenacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryReportedmaintenacePageRoutingModule {}
