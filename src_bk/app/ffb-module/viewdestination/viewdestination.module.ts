import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewdestinationPageRoutingModule } from './viewdestination-routing.module';

import { ViewdestinationPage } from './viewdestination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewdestinationPageRoutingModule
  ],
  declarations: [ViewdestinationPage]
})
export class ViewdestinationPageModule {}
