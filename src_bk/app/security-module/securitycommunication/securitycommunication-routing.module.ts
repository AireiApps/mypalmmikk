import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecuritycommunicationPage } from './securitycommunication.page';

const routes: Routes = [
  {
    path: '',
    component: SecuritycommunicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecuritycommunicationPageRoutingModule {}
