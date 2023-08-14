import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalletplantreportPage } from './palletplantreport.page';

const routes: Routes = [
  {
    path: '',
    component: PalletplantreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PalletplantreportPageRoutingModule {}
