import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyMaintenanceActionPage } from './weekly-maintenance-action.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyMaintenanceActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyMaintenanceActionPageRoutingModule {}
