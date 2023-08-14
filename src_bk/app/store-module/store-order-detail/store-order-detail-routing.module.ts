import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreOrderDetailPage } from './store-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StoreOrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreOrderDetailPageRoutingModule {}
