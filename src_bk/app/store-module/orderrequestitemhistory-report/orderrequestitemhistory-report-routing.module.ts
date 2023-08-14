import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderrequestitemhistoryReportPage } from './orderrequestitemhistory-report.page';

const routes: Routes = [
  {
    path: '',
    component: OrderrequestitemhistoryReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderrequestitemhistoryReportPageRoutingModule {}
