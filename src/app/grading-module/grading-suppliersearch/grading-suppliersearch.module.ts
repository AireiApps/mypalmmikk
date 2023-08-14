import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradingSuppliersearchPageRoutingModule } from './grading-suppliersearch-routing.module';

import { GradingSuppliersearchPage } from './grading-suppliersearch.page';

import { PipesModule } from 'src/app/pipes/pipes.module';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    GradingSuppliersearchPageRoutingModule,
    TranslateModule
  ],
  declarations: [GradingSuppliersearchPage]
})
export class GradingSuppliersearchPageModule {}
