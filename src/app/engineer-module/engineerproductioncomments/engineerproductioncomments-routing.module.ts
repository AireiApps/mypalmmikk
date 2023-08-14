import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineerproductioncommentsPage } from './engineerproductioncomments.page';

const routes: Routes = [
  {
    path: '',
    component: EngineerproductioncommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineerproductioncommentsPageRoutingModule {}
