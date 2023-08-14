import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionturnoverreportPage } from './productionturnoverreport.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionturnoverreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionturnoverreportPageRoutingModule {}
