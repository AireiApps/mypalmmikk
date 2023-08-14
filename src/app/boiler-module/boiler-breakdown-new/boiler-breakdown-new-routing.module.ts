import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerBreakdownNewPage } from './boiler-breakdown-new.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerBreakdownNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerBreakdownNewPageRoutingModule {}
