import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoBroadcastchatPage } from './ceo-broadcastchat.page';

const routes: Routes = [
  {
    path: '',
    component: CeoBroadcastchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoBroadcastchatPageRoutingModule {}
