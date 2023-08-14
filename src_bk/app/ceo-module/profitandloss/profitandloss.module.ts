import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfitandlossPageRoutingModule } from './profitandloss-routing.module';

import { ProfitandlossPage } from './profitandloss.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProfitandlossPageRoutingModule
  ],
  declarations: [ProfitandlossPage]
})
export class ProfitandlossPageModule {}
