import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityothervehiclehistoryPageRoutingModule } from './securityothervehiclehistory-routing.module';

import { SecurityothervehiclehistoryPage } from './securityothervehiclehistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurityothervehiclehistoryPageRoutingModule
  ],
  declarations: [SecurityothervehiclehistoryPage]
})
export class SecurityothervehiclehistoryPageModule {}
