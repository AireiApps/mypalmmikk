import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrivermapsPage } from './drivermaps.page';

const routes: Routes = [
  {
    path: '',
    component: DrivermapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrivermapsPageRoutingModule {}
