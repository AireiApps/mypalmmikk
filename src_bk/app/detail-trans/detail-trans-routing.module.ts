import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTransPage } from './detail-trans.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTransPageRoutingModule {}
