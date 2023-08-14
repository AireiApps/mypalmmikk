import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryreportHourlyPage } from './laboratoryreport-hourly.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryreportHourlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryreportHourlyPageRoutingModule {}
