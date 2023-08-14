import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreOrderHomeComponent } from './store-order-home.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreOrderHomePageRoutingModule } from './store-order-routing.module';



@NgModule({
  declarations: [StoreOrderHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreOrderHomePageRoutingModule
  ]
})
export class StoreOrderHomeModule {


}
