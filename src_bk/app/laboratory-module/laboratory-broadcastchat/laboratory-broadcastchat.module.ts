import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LaboratoryBroadcastchatPageRoutingModule } from "./laboratory-broadcastchat-routing.module";

import { LaboratoryBroadcastchatPage } from "./laboratory-broadcastchat.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    LaboratoryBroadcastchatPageRoutingModule,
  ],
  declarations: [LaboratoryBroadcastchatPage],
})
export class LaboratoryBroadcastchatPageModule {}
