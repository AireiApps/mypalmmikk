import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryBroadcastchatPage } from './laboratory-broadcastchat.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryBroadcastchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryBroadcastchatPageRoutingModule {}
