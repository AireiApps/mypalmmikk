import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosingstockreportPageRoutingModule } from './closingstockreport-routing.module';

import { ClosingstockreportPage } from './closingstockreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ClosingstockreportPageRoutingModule
  ],
  declarations: [ClosingstockreportPage]
})
export class ClosingstockreportPageModule {}
