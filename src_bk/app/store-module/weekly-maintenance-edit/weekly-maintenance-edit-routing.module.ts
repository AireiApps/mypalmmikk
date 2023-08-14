import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyMaintenanceEditPage } from './weekly-maintenance-edit.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyMaintenanceEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyMaintenanceEditPageRoutingModule {}
