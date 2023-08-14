import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffovertimePage } from './staffovertime.page';

const routes: Routes = [
  {
    path: '',
    component: StaffovertimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffovertimePageRoutingModule {}
