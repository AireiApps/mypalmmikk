import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GradingManualformPageRoutingModule } from './grading-manualform-routing.module';
import { GradingManualformPage } from './grading-manualform.page';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    GradingManualformPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GradingManualformPageRoutingModule,
    TranslateModule
  ]
})
export class GradingManualformPageModule {}
