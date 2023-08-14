import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivetrackingPageRoutingModule } from './livetracking-routing.module';

import { LivetrackingPage } from './livetracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivetrackingPageRoutingModule
  ],
  declarations: [LivetrackingPage]
})
export class LivetrackingPageModule {}
