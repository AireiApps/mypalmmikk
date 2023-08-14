import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprofilePageRoutingModule } from './emprofile-routing.module';

import { EmprofilePage } from './emprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EmprofilePageRoutingModule
  ],
  declarations: [EmprofilePage]
})
export class EmprofilePageModule {}
