import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerReportsPage } from './manager-reports.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerReportsPageRoutingModule {}
