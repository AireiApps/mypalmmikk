import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityhomePage } from './securityhome.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityhomePageRoutingModule {}
