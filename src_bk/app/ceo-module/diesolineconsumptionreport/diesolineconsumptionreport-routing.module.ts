import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiesolineconsumptionreportPage } from './diesolineconsumptionreport.page';

const routes: Routes = [
  {
    path: '',
    component: DiesolineconsumptionreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiesolineconsumptionreportPageRoutingModule {}
