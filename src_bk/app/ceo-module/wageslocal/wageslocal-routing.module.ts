import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WageslocalPage } from './wageslocal.page';

const routes: Routes = [
  {
    path: '',
    component: WageslocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WageslocalPageRoutingModule {}
