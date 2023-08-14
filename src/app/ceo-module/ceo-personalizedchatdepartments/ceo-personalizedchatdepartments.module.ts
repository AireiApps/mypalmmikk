import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeoPersonalizedchatdepartmentsPageRoutingModule } from './ceo-personalizedchatdepartments-routing.module';

import { CeoPersonalizedchatdepartmentsPage } from './ceo-personalizedchatdepartments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CeoPersonalizedchatdepartmentsPageRoutingModule
  ],
  declarations: [CeoPersonalizedchatdepartmentsPage]
})
export class CeoPersonalizedchatdepartmentsPageModule {}
