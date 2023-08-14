import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryPersonalizedchatdepartmentsPage } from './laboratory-personalizedchatdepartments.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryPersonalizedchatdepartmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryPersonalizedchatdepartmentsPageRoutingModule {}
