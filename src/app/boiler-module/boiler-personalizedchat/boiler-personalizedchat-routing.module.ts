import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerPersonalizedchatPage } from './boiler-personalizedchat.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerPersonalizedchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerPersonalizedchatPageRoutingModule {}
