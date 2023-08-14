import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GradingFormRoutingModule } from './gradingform-routing.module';
import { GradingFormComponent } from './grading-form.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    GradingFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradingFormRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class GradingFormModule { }
