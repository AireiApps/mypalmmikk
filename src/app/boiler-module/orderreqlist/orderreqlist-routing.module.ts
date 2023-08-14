import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderreqlistPage } from './orderreqlist.page';

const routes: Routes = [
  {
    path: '',
    component: OrderreqlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderreqlistPageRoutingModule {}
