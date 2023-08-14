import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineerhomePage } from './engineerhome.page';

const routes: Routes = [
  {
    path: '',
    component: EngineerhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineerhomePageRoutingModule {}
