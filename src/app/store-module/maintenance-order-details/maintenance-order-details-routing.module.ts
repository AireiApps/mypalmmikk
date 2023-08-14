import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceOrderDetailsPage } from './maintenance-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceOrderDetailsPageRoutingModule {}
