import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotebalancesheetreportPage } from './notebalancesheetreport.page';

const routes: Routes = [
  {
    path: '',
    component: NotebalancesheetreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotebalancesheetreportPageRoutingModule {}
