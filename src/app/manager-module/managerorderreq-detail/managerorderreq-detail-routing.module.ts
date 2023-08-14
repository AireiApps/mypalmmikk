import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerorderreqDetailPage } from './managerorderreq-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerorderreqDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerorderreqDetailPageRoutingModule {}
