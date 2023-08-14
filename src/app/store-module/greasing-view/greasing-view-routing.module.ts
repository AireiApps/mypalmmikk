import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreasingViewPage } from './greasing-view.page';

const routes: Routes = [
  {
    path: '',
    component: GreasingViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreasingViewPageRoutingModule {}
