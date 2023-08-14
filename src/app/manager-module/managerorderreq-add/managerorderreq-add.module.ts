import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerorderreqAddPageRoutingModule } from './managerorderreq-add-routing.module';

import { ManagerorderreqAddPage } from './managerorderreq-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ManagerorderreqAddPageRoutingModule
  ],
  declarations: [ManagerorderreqAddPage]
})
export class ManagerorderreqAddPageModule {}
