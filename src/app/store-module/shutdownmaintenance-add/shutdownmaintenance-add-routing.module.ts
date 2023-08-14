import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShutdownmaintenanceAddPage } from './shutdownmaintenance-add.page';

const routes: Routes = [
  {
    path: '',
    component: ShutdownmaintenanceAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShutdownmaintenanceAddPageRoutingModule {}
