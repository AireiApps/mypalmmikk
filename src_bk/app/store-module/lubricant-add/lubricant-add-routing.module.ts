import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LubricantAddPage } from './lubricant-add.page';

const routes: Routes = [
  {
    path: '',
    component: LubricantAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LubricantAddPageRoutingModule {}
