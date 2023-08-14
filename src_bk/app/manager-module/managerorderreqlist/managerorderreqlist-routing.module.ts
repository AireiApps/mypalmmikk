import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerorderreqlistPage } from './managerorderreqlist.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerorderreqlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerorderreqlistPageRoutingModule {}
