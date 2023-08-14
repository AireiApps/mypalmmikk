import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BoilerPersonalizedchatdepartmentsPageRoutingModule } from "./boiler-personalizedchatdepartments-routing.module";

import { BoilerPersonalizedchatdepartmentsPage } from "./boiler-personalizedchatdepartments.page";

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    BoilerPersonalizedchatdepartmentsPageRoutingModule,
  ],
  declarations: [BoilerPersonalizedchatdepartmentsPage],
})
export class BoilerPersonalizedchatdepartmentsPageModule {}
