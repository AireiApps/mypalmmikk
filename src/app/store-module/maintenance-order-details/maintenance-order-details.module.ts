import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceOrderDetailsPageRoutingModule } from './maintenance-order-details-routing.module';

import { MaintenanceOrderDetailsPage } from './maintenance-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenanceOrderDetailsPageRoutingModule
  ],
  declarations: [MaintenanceOrderDetailsPage]
})
export class MaintenanceOrderDetailsPageModule {}
