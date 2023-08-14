import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityothervehiclePage } from './securityothervehicle.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityothervehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityothervehiclePageRoutingModule {}
