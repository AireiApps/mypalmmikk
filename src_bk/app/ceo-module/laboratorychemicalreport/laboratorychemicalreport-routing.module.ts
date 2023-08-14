import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratorychemicalreportPage } from './laboratorychemicalreport.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratorychemicalreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorychemicalreportPageRoutingModule {}
