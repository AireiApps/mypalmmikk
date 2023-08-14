import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewdestinationPage } from './viewdestination.page';

const routes: Routes = [
  {
    path: '',
    component: ViewdestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewdestinationPageRoutingModule {}
