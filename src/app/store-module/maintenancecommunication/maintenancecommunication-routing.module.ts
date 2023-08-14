import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenancecommunicationPage } from './maintenancecommunication.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenancecommunicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenancecommunicationPageRoutingModule {}
