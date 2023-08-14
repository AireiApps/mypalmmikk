import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PkformPageRoutingModule } from './pkform-routing.module';

import { PkformPage } from './pkform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PkformPageRoutingModule
  ],
  declarations: [PkformPage]
})
export class PkformPageModule {}
