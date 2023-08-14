import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PkformPage } from './pkform.page';

const routes: Routes = [
  {
    path: '',
    component: PkformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PkformPageRoutingModule {}
