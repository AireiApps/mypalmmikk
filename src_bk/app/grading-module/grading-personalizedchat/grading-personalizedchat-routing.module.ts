import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingPersonalizedchatPage } from './grading-personalizedchat.page';

const routes: Routes = [
  {
    path: '',
    component: GradingPersonalizedchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingPersonalizedchatPageRoutingModule {}
