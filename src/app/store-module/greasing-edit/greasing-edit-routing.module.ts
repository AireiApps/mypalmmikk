import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreasingEditPage } from './greasing-edit.page';

const routes: Routes = [
  {
    path: '',
    component: GreasingEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreasingEditPageRoutingModule {}
