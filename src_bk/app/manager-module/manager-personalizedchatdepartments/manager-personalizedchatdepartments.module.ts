import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManagerPersonalizedchatdepartmentsPageRoutingModule } from "./manager-personalizedchatdepartments-routing.module";

import { ManagerPersonalizedchatdepartmentsPage } from "./manager-personalizedchatdepartments.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ManagerPersonalizedchatdepartmentsPageRoutingModule,
  ],
  declarations: [ManagerPersonalizedchatdepartmentsPage],
})
export class ManagerPersonalizedchatdepartmentsPageModule {}
