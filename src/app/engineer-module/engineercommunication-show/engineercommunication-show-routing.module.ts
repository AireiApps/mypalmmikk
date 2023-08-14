import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineercommunicationShowPage } from './engineercommunication-show.page';

const routes: Routes = [
  {
    path: '',
    component: EngineercommunicationShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineercommunicationShowPageRoutingModule {}
