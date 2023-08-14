import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagermaintenancereportPage } from './managermaintenancereport.page';

const routes: Routes = [
  {
    path: '',
    component: ManagermaintenancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagermaintenancereportPageRoutingModule {}
