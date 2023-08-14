import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompliancePageRoutingModule } from './compliance-routing.module';

import { CompliancePage } from './compliance.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CompliancePageRoutingModule
  ],
  declarations: [CompliancePage]
})
export class CompliancePageModule {}
