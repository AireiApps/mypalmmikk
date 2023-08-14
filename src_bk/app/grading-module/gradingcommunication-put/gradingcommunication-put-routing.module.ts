import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingcommunicationPutPage } from './gradingcommunication-put.page';

const routes: Routes = [
  {
    path: '',
    component: GradingcommunicationPutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingcommunicationPutPageRoutingModule {}
