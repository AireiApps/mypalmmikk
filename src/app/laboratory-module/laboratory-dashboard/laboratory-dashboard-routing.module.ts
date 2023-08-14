import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryDashboardPage } from './laboratory-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryDashboardPageRoutingModule {}
