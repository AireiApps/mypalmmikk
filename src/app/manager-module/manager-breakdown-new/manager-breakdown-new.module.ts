import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManagerBreakdownNewPageRoutingModule } from "./manager-breakdown-new-routing.module";

import { ManagerBreakdownNewPage } from "./manager-breakdown-new.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    ManagerBreakdownNewPageRoutingModule,
  ],
  declarations: [ManagerBreakdownNewPage],
})
export class ManagerBreakdownNewPageModule {}
