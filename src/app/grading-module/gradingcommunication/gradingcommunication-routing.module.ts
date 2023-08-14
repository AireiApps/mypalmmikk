import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingcommunicationPage } from './gradingcommunication.page';

const routes: Routes = [
  {
    path: '',
    component: GradingcommunicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingcommunicationPageRoutingModule {}
