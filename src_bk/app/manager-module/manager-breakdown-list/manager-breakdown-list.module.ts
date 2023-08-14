import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManagerBreakdownListPageRoutingModule } from "./manager-breakdown-list-routing.module";

import { ManagerBreakdownListPage } from "./manager-breakdown-list.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ManagerBreakdownListPageRoutingModule,
  ],
  declarations: [ManagerBreakdownListPage],
})
export class ManagerBreakdownListPageModule {}
