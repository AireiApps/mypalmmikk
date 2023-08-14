import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LubricantListPage } from './lubricant-list.page';

const routes: Routes = [
  {
    path: '',
    component: LubricantListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LubricantListPageRoutingModule {}
