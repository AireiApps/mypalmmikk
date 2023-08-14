import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyMaintenanceViewPage } from './weekly-maintenance-view.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyMaintenanceViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyMaintenanceViewPageRoutingModule {}
