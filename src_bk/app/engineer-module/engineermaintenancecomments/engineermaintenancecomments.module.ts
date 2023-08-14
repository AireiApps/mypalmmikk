import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineermaintenancecommentsPageRoutingModule } from './engineermaintenancecomments-routing.module';

import { EngineermaintenancecommentsPage } from './engineermaintenancecomments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EngineermaintenancecommentsPageRoutingModule
  ],
  declarations: [EngineermaintenancecommentsPage]
})
export class EngineermaintenancecommentsPageModule {}
