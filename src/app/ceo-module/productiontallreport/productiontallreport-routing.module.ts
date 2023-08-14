import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductiontallreportPage } from './productiontallreport.page';

const routes: Routes = [
  {
    path: '',
    component: ProductiontallreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductiontallreportPageRoutingModule {}
