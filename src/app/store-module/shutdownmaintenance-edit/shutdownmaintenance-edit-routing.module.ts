import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShutdownmaintenanceEditPage } from './shutdownmaintenance-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ShutdownmaintenanceEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShutdownmaintenanceEditPageRoutingModule {}
