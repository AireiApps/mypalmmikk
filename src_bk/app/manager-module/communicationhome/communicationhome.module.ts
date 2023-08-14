import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CommunicationhomePageRoutingModule } from "./communicationhome-routing.module";

import { CommunicationhomePage } from "./communicationhome.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CommunicationhomePageRoutingModule,
  ],
  declarations: [CommunicationhomePage],
})
export class CommunicationhomePageModule {}
