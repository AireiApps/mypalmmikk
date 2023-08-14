import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclehirereportPageRoutingModule } from './vehiclehirereport-routing.module';

import { VehiclehirereportPage } from './vehiclehirereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VehiclehirereportPageRoutingModule
  ],
  declarations: [VehiclehirereportPage]
})
export class VehiclehirereportPageModule {}
