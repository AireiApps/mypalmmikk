import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerPersonalizedchatPage } from './manager-personalizedchat.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerPersonalizedchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerPersonalizedchatPageRoutingModule {}
