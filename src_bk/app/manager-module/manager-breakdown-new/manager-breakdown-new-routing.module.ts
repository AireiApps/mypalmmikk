import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerBreakdownNewPage } from './manager-breakdown-new.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerBreakdownNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerBreakdownNewPageRoutingModule {}
