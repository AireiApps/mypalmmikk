import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerproductioncommentsPage } from './managerproductioncomments.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerproductioncommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerproductioncommentsPageRoutingModule {}
