import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuppliersearchPage } from './suppliersearch.page';

const routes: Routes = [
  {
    path: '',
    component: SuppliersearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliersearchPageRoutingModule {}
