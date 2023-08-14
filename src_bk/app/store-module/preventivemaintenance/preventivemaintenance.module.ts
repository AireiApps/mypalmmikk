import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreventivemaintenancePageRoutingModule } from './preventivemaintenance-routing.module';

import { PreventivemaintenancePage } from './preventivemaintenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreventivemaintenancePageRoutingModule
  ],
  declarations: [PreventivemaintenancePage]
})
export class PreventivemaintenancePageModule {}
