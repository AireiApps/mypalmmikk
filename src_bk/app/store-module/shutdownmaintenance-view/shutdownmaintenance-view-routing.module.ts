import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShutdownmaintenanceViewPage } from './shutdownmaintenance-view.page';

const routes: Routes = [
  {
    path: '',
    component: ShutdownmaintenanceViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShutdownmaintenanceViewPageRoutingModule {}
