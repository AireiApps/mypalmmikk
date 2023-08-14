import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerHourlyviewPage } from './boiler-hourlyview.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerHourlyviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerHourlyviewPageRoutingModule {}
