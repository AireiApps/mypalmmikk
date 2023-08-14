import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalentryreportPageRoutingModule } from './journalentryreport-routing.module';

import { JournalentryreportPage } from './journalentryreport.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    JournalentryreportPageRoutingModule
  ],
  declarations: [JournalentryreportPage]
})
export class JournalentryreportPageModule {}
