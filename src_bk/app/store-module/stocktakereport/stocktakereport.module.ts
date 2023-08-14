import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StocktakereportPageRoutingModule } from './stocktakereport-routing.module';

import { StocktakereportPage } from './stocktakereport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StocktakereportPageRoutingModule
  ],
  declarations: [StocktakereportPage]
})
export class StocktakereportPageModule {}
