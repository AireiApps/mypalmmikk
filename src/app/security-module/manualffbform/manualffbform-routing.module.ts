import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualffbformPage } from './manualffbform.page';

const routes: Routes = [
  {
    path: '',
    component: ManualffbformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualffbformPageRoutingModule {}
