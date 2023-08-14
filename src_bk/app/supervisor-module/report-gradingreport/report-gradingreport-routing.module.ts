import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportGradingreportPage } from './report-gradingreport.page';

const routes: Routes = [
  {
    path: '',
    component: ReportGradingreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportGradingreportPageRoutingModule {}
