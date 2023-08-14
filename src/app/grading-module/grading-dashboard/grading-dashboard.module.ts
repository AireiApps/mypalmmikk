import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradingDashboardPageRoutingModule } from './grading-dashboard-routing.module';

import { GradingDashboardPage } from './grading-dashboard.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    GradingDashboardPageRoutingModule,
    TranslateModule
  ],
  declarations: [GradingDashboardPage]
})
export class GradingDashboardPageModule {}
