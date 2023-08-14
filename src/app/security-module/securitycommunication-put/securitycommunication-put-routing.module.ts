import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecuritycommunicationPutPage } from './securitycommunication-put.page';

const routes: Routes = [
  {
    path: '',
    component: SecuritycommunicationPutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecuritycommunicationPutPageRoutingModule {}
