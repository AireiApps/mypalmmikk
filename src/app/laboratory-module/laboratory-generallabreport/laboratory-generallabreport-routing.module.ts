import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryGenerallabreportPage } from './laboratory-generallabreport.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryGenerallabreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryGenerallabreportPageRoutingModule {}
