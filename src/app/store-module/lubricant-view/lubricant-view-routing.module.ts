import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LubricantViewPage } from './lubricant-view.page';

const routes: Routes = [
  {
    path: '',
    component: LubricantViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LubricantViewPageRoutingModule {}
