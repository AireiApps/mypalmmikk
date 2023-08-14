import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoPersonalizedchatPage } from './ceo-personalizedchat.page';

const routes: Routes = [
  {
    path: '',
    component: CeoPersonalizedchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoPersonalizedchatPageRoutingModule {}
