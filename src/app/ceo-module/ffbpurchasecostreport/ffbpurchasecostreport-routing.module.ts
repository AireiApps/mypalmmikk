import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FfbpurchasecostreportPage } from './ffbpurchasecostreport.page';

const routes: Routes = [
  {
    path: '',
    component: FfbpurchasecostreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FfbpurchasecostreportPageRoutingModule {}
