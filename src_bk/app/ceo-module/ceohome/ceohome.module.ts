import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeohomePageRoutingModule } from './ceohome-routing.module';

import { CeohomePage } from './ceohome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    CeohomePageRoutingModule
  ],
  declarations: [CeohomePage]
})
export class CeohomePageModule {}
