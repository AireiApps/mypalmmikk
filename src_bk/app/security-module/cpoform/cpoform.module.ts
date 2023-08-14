import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpoformPageRoutingModule } from './cpoform-routing.module';

import { CpoformPage } from './cpoform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpoformPageRoutingModule
  ],
  declarations: [CpoformPage]
})
export class CpoformPageModule {}
