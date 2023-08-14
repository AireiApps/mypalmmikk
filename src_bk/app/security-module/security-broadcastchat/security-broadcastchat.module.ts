import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SecurityBroadcastchatPageRoutingModule } from "./security-broadcastchat-routing.module";

import { SecurityBroadcastchatPage } from "./security-broadcastchat.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    SecurityBroadcastchatPageRoutingModule,
  ],
  declarations: [SecurityBroadcastchatPage],
})
export class SecurityBroadcastchatPageModule {}
