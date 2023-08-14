import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineermaintenancecommentsPage } from './engineermaintenancecomments.page';

const routes: Routes = [
  {
    path: '',
    component: EngineermaintenancecommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineermaintenancecommentsPageRoutingModule {}
