import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingcommunicationShowPage } from './gradingcommunication-show.page';

const routes: Routes = [
  {
    path: '',
    component: GradingcommunicationShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingcommunicationShowPageRoutingModule {}
