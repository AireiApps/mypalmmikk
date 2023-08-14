import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupplierUpdatePageRoutingModule } from './supplier-update-routing.module';

import { SupplierUpdatePage } from './supplier-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupplierUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SupplierUpdatePage]
})
export class SupplierUpdatePageModule { }
