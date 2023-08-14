import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OerkerreportPage } from './oerkerreport.page';

const routes: Routes = [
  {
    path: '',
    component: OerkerreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OerkerreportPageRoutingModule {}
