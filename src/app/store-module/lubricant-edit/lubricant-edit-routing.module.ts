import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LubricantEditPage } from './lubricant-edit.page';

const routes: Routes = [
  {
    path: '',
    component: LubricantEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LubricantEditPageRoutingModule {}
