import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockissueonlocationreportPage } from './stockissueonlocationreport.page';

const routes: Routes = [
  {
    path: '',
    component: StockissueonlocationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockissueonlocationreportPageRoutingModule {}
