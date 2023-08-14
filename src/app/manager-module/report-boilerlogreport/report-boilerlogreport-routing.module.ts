import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportBoilerlogreportPage } from './report-boilerlogreport.page';

const routes: Routes = [
  {
    path: '',
    component: ReportBoilerlogreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportBoilerlogreportPageRoutingModule {}
