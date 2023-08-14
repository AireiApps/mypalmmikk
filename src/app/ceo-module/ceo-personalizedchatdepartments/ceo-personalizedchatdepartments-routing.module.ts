import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeoPersonalizedchatdepartmentsPage } from './ceo-personalizedchatdepartments.page';

const routes: Routes = [
  {
    path: '',
    component: CeoPersonalizedchatdepartmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeoPersonalizedchatdepartmentsPageRoutingModule {}
