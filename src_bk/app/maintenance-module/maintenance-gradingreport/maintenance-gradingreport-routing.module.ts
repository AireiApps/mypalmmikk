import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceGradingreportPage } from './maintenance-gradingreport.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceGradingreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceGradingreportPageRoutingModule {}
