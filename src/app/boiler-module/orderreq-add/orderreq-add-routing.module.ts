import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderreqAddPage } from './orderreq-add.page';

const routes: Routes = [
  {
    path: '',
    component: OrderreqAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderreqAddPageRoutingModule {}
