import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectcostlubricantreportPageRoutingModule } from './directcostlubricantreport-routing.module';

import { DirectcostlubricantreportPage } from './directcostlubricantreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DirectcostlubricantreportPageRoutingModule
  ],
  declarations: [DirectcostlubricantreportPage]
})
export class DirectcostlubricantreportPageModule {}
