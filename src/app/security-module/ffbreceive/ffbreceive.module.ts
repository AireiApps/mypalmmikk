import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FfbreceivePageRoutingModule } from './ffbreceive-routing.module';

import { FfbreceivePage } from './ffbreceive.page';

import { OvalShapeModule } from 'src/app/component/ux/oval-shape/oval-shape.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FfbreceivePageRoutingModule,
    OvalShapeModule
  ],
  declarations: [FfbreceivePage]
})
export class FfbreceivePageModule {}
