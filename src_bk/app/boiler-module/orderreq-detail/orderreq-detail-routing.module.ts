import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderreqDetailPage } from './orderreq-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OrderreqDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderreqDetailPageRoutingModule {}
