import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BoilerLogEntryPageRoutingModule } from "./boiler-log-entry-routing.module";

import { BoilerLogEntryPage } from "./boiler-log-entry.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BoilerLogEntryPageRoutingModule,
  ],
  declarations: [BoilerLogEntryPage],
})
export class BoilerLogEntryPageModule {}
