import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerLogEntryPage } from './boiler-log-entry.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerLogEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerLogEntryPageRoutingModule {}
