import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManagerLogbookPageRoutingModule } from "./manager-logbook-routing.module";

import { ManagerLogbookPage } from "./manager-logbook.page";

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ManagerLogbookPageRoutingModule,
  ],
  declarations: [ManagerLogbookPage],
})
export class ManagerLogbookPageModule {}
