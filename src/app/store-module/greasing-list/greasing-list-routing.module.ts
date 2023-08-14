import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreasingListPage } from './greasing-list.page';

const routes: Routes = [
  {
    path: '',
    component: GreasingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreasingListPageRoutingModule {}
