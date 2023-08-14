import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerLogbookPage } from './manager-logbook.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerLogbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerLogbookPageRoutingModule {}
