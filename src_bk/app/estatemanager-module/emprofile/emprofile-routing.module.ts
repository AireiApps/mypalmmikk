import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprofilePage } from './emprofile.page';

const routes: Routes = [
  {
    path: '',
    component: EmprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprofilePageRoutingModule {}
