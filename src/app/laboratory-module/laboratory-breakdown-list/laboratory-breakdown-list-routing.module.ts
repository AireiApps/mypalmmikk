import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryBreakdownListPage } from './laboratory-breakdown-list.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryBreakdownListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryBreakdownListPageRoutingModule {}
