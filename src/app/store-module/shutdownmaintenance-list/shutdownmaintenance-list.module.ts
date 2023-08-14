import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceListPageRoutingModule } from './shutdownmaintenance-list-routing.module';

import { ShutdownmaintenanceListPage } from './shutdownmaintenance-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShutdownmaintenanceListPageRoutingModule
  ],
  declarations: [ShutdownmaintenanceListPage]
})
export class ShutdownmaintenanceListPageModule {}
