import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinerunninghourPageRoutingModule } from './machinerunninghour-routing.module';

import { MachinerunninghourPage } from './machinerunninghour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachinerunninghourPageRoutingModule
  ],
  declarations: [MachinerunninghourPage]
})
export class MachinerunninghourPageModule {}
