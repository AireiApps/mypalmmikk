import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerorderreqAddPage } from './managerorderreq-add.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerorderreqAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerorderreqAddPageRoutingModule {}
