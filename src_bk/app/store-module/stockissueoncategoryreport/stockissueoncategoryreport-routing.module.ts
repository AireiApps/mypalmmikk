import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockissueoncategoryreportPage } from './stockissueoncategoryreport.page';

const routes: Routes = [
  {
    path: '',
    component: StockissueoncategoryreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockissueoncategoryreportPageRoutingModule {}
