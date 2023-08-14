import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurbineperformancePage } from './turbineperformance.page';

const routes: Routes = [
  {
    path: '',
    component: TurbineperformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurbineperformancePageRoutingModule {}
