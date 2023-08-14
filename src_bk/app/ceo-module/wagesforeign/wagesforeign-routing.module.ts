import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WagesforeignPage } from './wagesforeign.page';

const routes: Routes = [
  {
    path: '',
    component: WagesforeignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WagesforeignPageRoutingModule {}
