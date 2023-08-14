import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShutdownmaintenanceActionPage } from './shutdownmaintenance-action.page';

const routes: Routes = [
  {
    path: '',
    component: ShutdownmaintenanceActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShutdownmaintenanceActionPageRoutingModule {}
