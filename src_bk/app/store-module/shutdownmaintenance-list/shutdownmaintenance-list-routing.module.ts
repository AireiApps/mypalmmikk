import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShutdownmaintenanceListPage } from './shutdownmaintenance-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShutdownmaintenanceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShutdownmaintenanceListPageRoutingModule {}
