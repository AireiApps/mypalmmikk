import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactorychemicalconsumptionreportPage } from './factorychemicalconsumptionreport.page';

const routes: Routes = [
  {
    path: '',
    component: FactorychemicalconsumptionreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactorychemicalconsumptionreportPageRoutingModule {}
