import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityroundsPageRoutingModule } from './securityrounds-routing.module';

import { SecurityroundsPage } from './securityrounds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SecurityroundsPageRoutingModule
  ],
  declarations: [SecurityroundsPage]
})
export class SecurityroundsPageModule {}
