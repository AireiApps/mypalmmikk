import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OthersuppliersearchPageRoutingModule } from './othersuppliersearch-routing.module';

import { OthersuppliersearchPage } from './othersuppliersearch.page';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    OthersuppliersearchPageRoutingModule
  ],
  declarations: [OthersuppliersearchPage]
})
export class OthersuppliersearchPageModule {}
