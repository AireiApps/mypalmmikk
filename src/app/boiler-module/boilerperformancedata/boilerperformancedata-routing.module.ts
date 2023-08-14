import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoilerperformancedataPage } from './boilerperformancedata.page';

const routes: Routes = [
  {
    path: '',
    component: BoilerperformancedataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoilerperformancedataPageRoutingModule {}
