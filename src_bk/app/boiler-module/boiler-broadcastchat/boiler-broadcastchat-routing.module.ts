import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerBroadcastchatPage } from './boiler-broadcastchat.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerBroadcastchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerBroadcastchatPageRoutingModule {}
