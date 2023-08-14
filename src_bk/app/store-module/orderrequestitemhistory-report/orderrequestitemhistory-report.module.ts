import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderrequestitemhistoryReportPageRoutingModule } from './orderrequestitemhistory-report-routing.module';

import { OrderrequestitemhistoryReportPage } from './orderrequestitemhistory-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderrequestitemhistoryReportPageRoutingModule
  ],
  declarations: [OrderrequestitemhistoryReportPage]
})
export class OrderrequestitemhistoryReportPageModule {}
