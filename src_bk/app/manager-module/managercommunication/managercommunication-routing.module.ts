import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagercommunicationPage } from './managercommunication.page';

const routes: Routes = [
  {
    path: '',
    component: ManagercommunicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagercommunicationPageRoutingModule {}
