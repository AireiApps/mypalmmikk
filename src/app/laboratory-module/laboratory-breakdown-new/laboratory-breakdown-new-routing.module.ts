import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryBreakdownNewPage } from './laboratory-breakdown-new.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryBreakdownNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryBreakdownNewPageRoutingModule {}
