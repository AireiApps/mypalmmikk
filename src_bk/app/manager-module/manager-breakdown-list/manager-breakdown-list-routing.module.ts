import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerBreakdownListPage } from './manager-breakdown-list.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerBreakdownListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerBreakdownListPageRoutingModule {}
