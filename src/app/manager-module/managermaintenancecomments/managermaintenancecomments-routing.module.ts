import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagermaintenancecommentsPage } from './managermaintenancecomments.page';

const routes: Routes = [
  {
    path: '',
    component: ManagermaintenancecommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagermaintenancecommentsPageRoutingModule {}
