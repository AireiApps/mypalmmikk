import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancereportPage } from './maintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancereportPageRoutingModule {}
