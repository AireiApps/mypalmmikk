import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChathomePage } from './chathome.page';

const routes: Routes = [
  {
    path: '',
    component: ChathomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChathomePageRoutingModule {}
