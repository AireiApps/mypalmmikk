import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerorderreqlistPageRoutingModule } from './managerorderreqlist-routing.module';

import { ManagerorderreqlistPage } from './managerorderreqlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerorderreqlistPageRoutingModule
  ],
  declarations: [ManagerorderreqlistPage]
})
export class ManagerorderreqlistPageModule {}
