import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingDashboardPage } from './grading-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: GradingDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingDashboardPageRoutingModule {}
