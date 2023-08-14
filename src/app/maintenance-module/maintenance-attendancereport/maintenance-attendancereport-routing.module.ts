import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceAttendancereportPage } from './maintenance-attendancereport.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceAttendancereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceAttendancereportPageRoutingModule {}
