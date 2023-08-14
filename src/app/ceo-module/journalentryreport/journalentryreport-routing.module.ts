import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalentryreportPage } from './journalentryreport.page';

const routes: Routes = [
  {
    path: '',
    component: JournalentryreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalentryreportPageRoutingModule {}
