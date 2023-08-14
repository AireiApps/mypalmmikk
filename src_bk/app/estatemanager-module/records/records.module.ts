import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordsPageRoutingModule } from './records-routing.module';

import { RecordsPage } from './records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecordsPageRoutingModule
  ],
  declarations: [RecordsPage]
})
export class RecordsPageModule {}
