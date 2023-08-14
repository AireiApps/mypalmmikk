import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerproductionreportPage } from './managerproductionreport.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerproductionreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerproductionreportPageRoutingModule {}
