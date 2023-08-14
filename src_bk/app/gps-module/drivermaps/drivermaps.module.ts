import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DrivermapsPageRoutingModule } from './drivermaps-routing.module';
import { DrivermapsPage } from './drivermaps.page';
import { OvalShapeModule } from 'src/app/component/ux/oval-shape/oval-shape.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivermapsPageRoutingModule,
    OvalShapeModule
  ],
  declarations: [DrivermapsPage]
})
export class DrivermapsPageModule { }
