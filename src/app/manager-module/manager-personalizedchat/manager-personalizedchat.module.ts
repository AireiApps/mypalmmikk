import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerPersonalizedchatPageRoutingModule } from './manager-personalizedchat-routing.module';

import { ManagerPersonalizedchatPage } from './manager-personalizedchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerPersonalizedchatPageRoutingModule
  ],
  declarations: [ManagerPersonalizedchatPage]
})
export class ManagerPersonalizedchatPageModule {}
