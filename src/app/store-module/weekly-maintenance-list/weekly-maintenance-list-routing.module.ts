import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyMaintenanceListPage } from './weekly-maintenance-list.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyMaintenanceListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyMaintenanceListPageRoutingModule {}
