import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityBroadcastchatPage } from './security-broadcastchat.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityBroadcastchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityBroadcastchatPageRoutingModule {}
