import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSupplierPageRoutingModule } from './home-supplier-routing.module';

import { HomeSupplierPage } from './home-supplier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSupplierPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomeSupplierPage]
})
export class HomeSupplierPageModule { }
