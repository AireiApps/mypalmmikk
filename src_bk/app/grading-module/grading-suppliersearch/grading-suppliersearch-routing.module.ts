import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingSuppliersearchPage } from './grading-suppliersearch.page';

const routes: Routes = [
  {
    path: '',
    component: GradingSuppliersearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingSuppliersearchPageRoutingModule {}
