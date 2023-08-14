import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecuritycommunicationShowPage } from './securitycommunication-show.page';

const routes: Routes = [
  {
    path: '',
    component: SecuritycommunicationShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecuritycommunicationShowPageRoutingModule {}
