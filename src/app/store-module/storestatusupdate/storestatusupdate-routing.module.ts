import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorestatusupdatePage } from './storestatusupdate.page';

const routes: Routes = [
  {
    path: '',
    component: StorestatusupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorestatusupdatePageRoutingModule {}
