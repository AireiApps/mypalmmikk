import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineercommunicationPage } from './engineercommunication.page';

const routes: Routes = [
  {
    path: '',
    component: EngineercommunicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineercommunicationPageRoutingModule {}
