import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryhomePage } from './historyhome.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryhomePageRoutingModule {}
