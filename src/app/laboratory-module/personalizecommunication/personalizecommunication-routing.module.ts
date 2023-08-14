import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizecommunicationPage } from './personalizecommunication.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizecommunicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizecommunicationPageRoutingModule {}
