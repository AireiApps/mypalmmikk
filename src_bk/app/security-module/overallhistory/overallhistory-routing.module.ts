import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverallhistoryPage } from './overallhistory.page';

const routes: Routes = [
  {
    path: '',
    component: OverallhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverallhistoryPageRoutingModule {}
