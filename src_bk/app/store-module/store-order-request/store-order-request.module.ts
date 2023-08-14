import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreOrderRequestComponent } from './store-order-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreOrderRequestPageRoutingModule } from './store-order-request-routing.module';



@NgModule({
  declarations: [StoreOrderRequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreOrderRequestPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class StoreOrderRequestModule { }
