import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicationhomePage } from './communicationhome.page';

const routes: Routes = [
  {
    path: '',
    component: CommunicationhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicationhomePageRoutingModule {}
