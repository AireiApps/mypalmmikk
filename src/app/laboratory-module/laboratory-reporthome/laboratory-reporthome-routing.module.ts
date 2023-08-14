import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryReporthomePage } from './laboratory-reporthome.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryReporthomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryReporthomePageRoutingModule {}
