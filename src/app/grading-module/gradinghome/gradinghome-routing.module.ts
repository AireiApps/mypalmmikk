import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradinghomePage } from './gradinghome.page';

const routes: Routes = [
  {
    path: '',
    component: GradinghomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradinghomePageRoutingModule {}
