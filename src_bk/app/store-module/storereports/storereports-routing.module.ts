import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorereportsPage } from './storereports.page';

const routes: Routes = [
  {
    path: '',
    component: StorereportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorereportsPageRoutingModule {}
