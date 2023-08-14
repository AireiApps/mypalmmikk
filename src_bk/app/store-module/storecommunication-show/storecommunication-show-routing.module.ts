import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorecommunicationShowPage } from './storecommunication-show.page';

const routes: Routes = [
  {
    path: '',
    component: StorecommunicationShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorecommunicationShowPageRoutingModule {}
