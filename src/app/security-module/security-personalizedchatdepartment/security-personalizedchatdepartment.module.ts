import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityPersonalizedchatdepartmentPageRoutingModule } from './security-personalizedchatdepartment-routing.module';

import { SecurityPersonalizedchatdepartmentPage } from './security-personalizedchatdepartment.page';

import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SecurityPersonalizedchatdepartmentPageRoutingModule
  ],
  declarations: [SecurityPersonalizedchatdepartmentPage]
})
export class SecurityPersonalizedchatdepartmentPageModule {}
