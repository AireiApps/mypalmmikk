import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroadcastcommunicationPage } from './broadcastcommunication.page';

const routes: Routes = [
  {
    path: '',
    component: BroadcastcommunicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroadcastcommunicationPageRoutingModule {}
