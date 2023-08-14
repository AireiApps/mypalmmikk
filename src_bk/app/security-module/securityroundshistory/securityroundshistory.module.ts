import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityroundshistoryPageRoutingModule } from './securityroundshistory-routing.module';

import { SecurityroundshistoryPage } from './securityroundshistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SecurityroundshistoryPageRoutingModule
  ],
  declarations: [SecurityroundshistoryPage]
})
export class SecurityroundshistoryPageModule {}
