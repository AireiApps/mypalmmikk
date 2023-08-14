import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyMaintenancePage } from './weekly-maintenance.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyMaintenancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyMaintenancePageRoutingModule {}
