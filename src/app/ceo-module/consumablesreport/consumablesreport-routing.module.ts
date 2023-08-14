import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumablesreportPage } from './consumablesreport.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumablesreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumablesreportPageRoutingModule {}
