import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialstatementreportPage } from './financialstatementreport.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialstatementreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialstatementreportPageRoutingModule {}
