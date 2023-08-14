import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExttraordinaryexpensereportPage } from './exttraordinaryexpensereport.page';

const routes: Routes = [
  {
    path: '',
    component: ExttraordinaryexpensereportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExttraordinaryexpensereportPageRoutingModule {}
