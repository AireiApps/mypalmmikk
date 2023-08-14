import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GradingPersonalizedchatdepartmentsPage } from './grading-personalizedchatdepartments.page';

const routes: Routes = [
  {
    path: '',
    component: GradingPersonalizedchatdepartmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradingPersonalizedchatdepartmentsPageRoutingModule {}
