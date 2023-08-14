import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancecommunicationreportPage } from './maintenancecommunicationreport.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancecommunicationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancecommunicationreportPageRoutingModule {}
