import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LaboratoryReportedmaintenacePageRoutingModule } from "./laboratory-reportedmaintenace-routing.module";

import { LaboratoryReportedmaintenacePage } from "./laboratory-reportedmaintenace.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    LaboratoryReportedmaintenacePageRoutingModule,
  ],
  declarations: [LaboratoryReportedmaintenacePage],
})
export class LaboratoryReportedmaintenacePageModule {}
