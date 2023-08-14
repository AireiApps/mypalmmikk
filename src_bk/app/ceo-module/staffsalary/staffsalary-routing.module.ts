import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffsalaryPage } from './staffsalary.page';

const routes: Routes = [
  {
    path: '',
    component: StaffsalaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffsalaryPageRoutingModule {}
