import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingManualformPage } from './grading-manualform.page';

const routes: Routes = [
  {
    path: '',
    component: GradingManualformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingManualformPageRoutingModule {}
