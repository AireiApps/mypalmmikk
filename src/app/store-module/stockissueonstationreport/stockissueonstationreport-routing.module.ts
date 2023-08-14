import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockissueonstationreportPage } from './stockissueonstationreport.page';

const routes: Routes = [
  {
    path: '',
    component: StockissueonstationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockissueonstationreportPageRoutingModule {}
