import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilercommunicationShowPage } from './boilercommunication-show.page';

const routes: Routes = [
  {
    path: '',
    component: BoilercommunicationShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilercommunicationShowPageRoutingModule {}
