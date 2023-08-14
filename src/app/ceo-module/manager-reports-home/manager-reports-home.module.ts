import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManagerReportsHomePageRoutingModule } from "./manager-reports-home-routing.module";

import { ManagerReportsHomePage } from "./manager-reports-home.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ManagerReportsHomePageRoutingModule,
  ],
  declarations: [ManagerReportsHomePage],
})
export class ManagerReportsHomePageModule {}
