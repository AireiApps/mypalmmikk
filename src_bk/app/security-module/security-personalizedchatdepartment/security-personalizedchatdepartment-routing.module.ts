import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityPersonalizedchatdepartmentPage } from './security-personalizedchatdepartment.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityPersonalizedchatdepartmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityPersonalizedchatdepartmentPageRoutingModule {}
