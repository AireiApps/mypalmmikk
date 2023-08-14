import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSupplierPage } from './home-supplier.page';

const routes: Routes = [
  {
    path: '',
    component: HomeSupplierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeSupplierPageRoutingModule {}
