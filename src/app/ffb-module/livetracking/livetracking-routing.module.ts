import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivetrackingPage } from './livetracking.page';

const routes: Routes = [
  {
    path: '',
    component: LivetrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivetrackingPageRoutingModule {}
