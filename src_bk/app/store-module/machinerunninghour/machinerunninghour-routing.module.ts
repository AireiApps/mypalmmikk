import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinerunninghourPage } from './machinerunninghour.page';

const routes: Routes = [
  {
    path: '',
    component: MachinerunninghourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachinerunninghourPageRoutingModule {}
