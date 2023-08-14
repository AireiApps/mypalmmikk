import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingChatPage } from './grading-chat.page';

const routes: Routes = [
  {
    path: '',
    component: GradingChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingChatPageRoutingModule {}
