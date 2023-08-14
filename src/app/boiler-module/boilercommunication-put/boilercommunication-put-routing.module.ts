import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilercommunicationPutPage } from './boilercommunication-put.page';

const routes: Routes = [
  {
    path: '',
    component: BoilercommunicationPutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilercommunicationPutPageRoutingModule {}
