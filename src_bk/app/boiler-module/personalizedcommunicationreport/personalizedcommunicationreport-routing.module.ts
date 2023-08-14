import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizedcommunicationreportPage } from './personalizedcommunicationreport.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizedcommunicationreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizedcommunicationreportPageRoutingModule {}
