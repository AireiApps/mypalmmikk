import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclehirereportPage } from './vehiclehirereport.page';

const routes: Routes = [
  {
    path: '',
    component: VehiclehirereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclehirereportPageRoutingModule {}
