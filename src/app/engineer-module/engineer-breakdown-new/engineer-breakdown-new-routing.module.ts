import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineerBreakdownNewPage } from './engineer-breakdown-new.page';

const routes: Routes = [
  {
    path: '',
    component: EngineerBreakdownNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineerBreakdownNewPageRoutingModule {}
