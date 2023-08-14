import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreasingAddPage } from './greasing-add.page';

const routes: Routes = [
  {
    path: '',
    component: GreasingAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreasingAddPageRoutingModule {}
