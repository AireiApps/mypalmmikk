import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FfbreceivePage } from './ffbreceive.page';

const routes: Routes = [
  {
    path: '',
    component: FfbreceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FfbreceivePageRoutingModule {}
