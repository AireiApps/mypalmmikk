import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineerBreakdownListPage } from './engineer-breakdown-list.page';

const routes: Routes = [
  {
    path: '',
    component: EngineerBreakdownListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineerBreakdownListPageRoutingModule {}
