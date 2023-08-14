import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorecommunicationPutPage } from './storecommunication-put.page';

const routes: Routes = [
  {
    path: '',
    component: StorecommunicationPutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorecommunicationPutPageRoutingModule {}
