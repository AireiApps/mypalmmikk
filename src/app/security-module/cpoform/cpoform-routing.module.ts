import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpoformPage } from './cpoform.page';

const routes: Routes = [
  {
    path: '',
    component: CpoformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpoformPageRoutingModule {}
