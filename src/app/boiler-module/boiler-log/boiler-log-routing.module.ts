import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerLogPage } from './boiler-log.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerLogPageRoutingModule {}
