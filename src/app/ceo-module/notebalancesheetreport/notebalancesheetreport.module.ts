import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotebalancesheetreportPageRoutingModule } from './notebalancesheetreport-routing.module';

import { NotebalancesheetreportPage } from './notebalancesheetreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NotebalancesheetreportPageRoutingModule
  ],
  declarations: [NotebalancesheetreportPage]
})
export class NotebalancesheetreportPageModule {}
