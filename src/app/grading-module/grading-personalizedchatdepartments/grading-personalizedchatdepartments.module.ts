import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradingPersonalizedchatdepartmentsPageRoutingModule } from './grading-personalizedchatdepartments-routing.module';

import { GradingPersonalizedchatdepartmentsPage } from './grading-personalizedchatdepartments.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradingPersonalizedchatdepartmentsPageRoutingModule,
    TranslateModule
  ],
  declarations: [GradingPersonalizedchatdepartmentsPage]
})
export class GradingPersonalizedchatdepartmentsPageModule {}
