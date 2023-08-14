import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineerorderreqlistPageRoutingModule } from './engineerorderreqlist-routing.module';

import { EngineerorderreqlistPage } from './engineerorderreqlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineerorderreqlistPageRoutingModule
  ],
  declarations: [EngineerorderreqlistPage]
})
export class EngineerorderreqlistPageModule {}
