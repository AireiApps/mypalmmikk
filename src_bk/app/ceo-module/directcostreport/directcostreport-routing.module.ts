import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectcostreportPage } from './directcostreport.page';

const routes: Routes = [
  {
    path: '',
    component: DirectcostreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectcostreportPageRoutingModule {}
