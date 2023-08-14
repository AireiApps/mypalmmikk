import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OthersuppliersearchPage } from './othersuppliersearch.page';

const routes: Routes = [
  {
    path: '',
    component: OthersuppliersearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OthersuppliersearchPageRoutingModule {}
