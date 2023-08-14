import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LubricantconsumptionreportPage } from './lubricantconsumptionreport.page';

const routes: Routes = [
  {
    path: '',
    component: LubricantconsumptionreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LubricantconsumptionreportPageRoutingModule {}
