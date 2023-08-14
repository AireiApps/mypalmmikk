import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManagerReportedmaintenanceDetailPageRoutingModule } from "./manager-reportedmaintenance-detail-routing.module";

import { ManagerReportedmaintenanceDetailPage } from "./manager-reportedmaintenance-detail.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    ManagerReportedmaintenanceDetailPageRoutingModule,
  ],
  declarations: [ManagerReportedmaintenanceDetailPage],
})
export class ManagerReportedmaintenanceDetailPageModule {}
