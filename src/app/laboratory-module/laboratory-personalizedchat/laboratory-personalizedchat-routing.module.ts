import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryPersonalizedchatPage } from './laboratory-personalizedchat.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratoryPersonalizedchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratoryPersonalizedchatPageRoutingModule {}
