import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerPersonalizedchatdepartmentsPage } from './boiler-personalizedchatdepartments.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerPersonalizedchatdepartmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerPersonalizedchatdepartmentsPageRoutingModule {}
