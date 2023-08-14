import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerBroadcastchatPage } from './manager-broadcastchat.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerBroadcastchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerBroadcastchatPageRoutingModule {}
