import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SealsexpensereportPage } from './sealsexpensereport.page';

const routes: Routes = [
  {
    path: '',
    component: SealsexpensereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SealsexpensereportPageRoutingModule {}
