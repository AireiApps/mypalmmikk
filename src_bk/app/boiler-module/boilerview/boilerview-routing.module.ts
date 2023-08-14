import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerviewPage } from './boilerview.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerviewPageRoutingModule {}
