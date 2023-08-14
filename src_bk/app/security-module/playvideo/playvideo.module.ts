import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayvideoPageRoutingModule } from './playvideo-routing.module';

import { PlayvideoPage } from './playvideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayvideoPageRoutingModule
  ],
  declarations: [PlayvideoPage]
})
export class PlayvideoPageModule {}
