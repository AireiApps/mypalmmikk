import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SuppliersearchPageRoutingModule } from './suppliersearch-routing.module';
import { SuppliersearchPage } from './suppliersearch.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    SuppliersearchPageRoutingModule
  ],
  declarations: [SuppliersearchPage]
})
export class SuppliersearchPageModule {}
