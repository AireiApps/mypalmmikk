import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerReportsPageRoutingModule } from './manager-reports-routing.module';

import { ManagerReportsPage } from './manager-reports.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ManagerReportsPageRoutingModule
  ],
  declarations: [ManagerReportsPage]
})
export class ManagerReportsPageModule {}
