import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineerDashboardPage } from './engineer-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: EngineerDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineerDashboardPageRoutingModule {}
