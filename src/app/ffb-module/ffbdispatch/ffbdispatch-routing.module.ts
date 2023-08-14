import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FfbdispatchPage } from './ffbdispatch.page';

const routes: Routes = [
  {
    path: '',
    component: FfbdispatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FfbdispatchPageRoutingModule {}
