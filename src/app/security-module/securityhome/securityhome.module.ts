import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityhomePageRoutingModule } from './securityhome-routing.module';

import { SecurityhomePage } from './securityhome.page';
import { OvalShapeModule } from 'src/app/component/ux/oval-shape/oval-shape.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SecurityhomePageRoutingModule,
    OvalShapeModule
  ],
  declarations: [SecurityhomePage]
})
export class SecurityhomePageModule { }
