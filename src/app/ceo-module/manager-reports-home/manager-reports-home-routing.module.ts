import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerReportsHomePage } from './manager-reports-home.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerReportsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerReportsHomePageRoutingModule {}
