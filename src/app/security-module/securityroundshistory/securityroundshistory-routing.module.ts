import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityroundshistoryPage } from './securityroundshistory.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityroundshistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityroundshistoryPageRoutingModule {}
