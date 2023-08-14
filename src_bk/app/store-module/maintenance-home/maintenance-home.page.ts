import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AIREIService } from 'src/app/api/api.service';
import * as moment from 'moment';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';
import { appsettings } from 'src/app/appsettings';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-maintenance-home',
  templateUrl: './maintenance-home.page.html',
  styleUrls: ['./maintenance-home.page.scss'],
})
export class MaintenanceHomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  today = moment(new Date().toISOString()).format('YYYY-MM-DD');  
  startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
  count = 0;
  weeklycount = 0;
  //mill_name = appsettings.MILL_NAME

  mill_name = this.userlist.millname;

  constructor(private router: Router, private httpservice: HttpserviceService, private zone: NgZone, private commonservice: AIREIService, private notifi: AuthGuardService, private service: StoreServiceService) { }

  ngOnInit() {
  }

  btn_weeklynotification() {
    localStorage.setItem(
      "weeklybadge_count",
      "0"
    );
    this.router.navigate(["/notificationweekly"]);
  }

  btn_notification() {
    localStorage.setItem(
      "badge_count",
      "0"
    );
    this.router.navigate(["/notification"]);
  }

  ngAfterViewInit(): void {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.weeklycount = 10;
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();
    this.getWeeklyNotificationCount();
  }

  ionViewDidEnter() {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.weeklycount = 10;
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();
    this.getWeeklyNotificationCount();
  }

  updateNotification() {
    this.zone.run(() => {
      this.count = parseInt(localStorage.getItem("badge_count"));
      this.weeklycount = 10;
    });
  }

  getLiveNotification() {
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        this.updateNotification();
      }
    );
  }

  getWeeklyNotificationCount() {
    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.startOfMonth,
      Todate: this.today,
    };
    
    this.commonservice.getWeeklyNotification(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      this.weeklycount=resultdata.noofcount;
    });    
  }

  preventivemaintenance() {    
    this.router.navigate(["/preventivemaintenance"]);
  }

  maint() {    
    this.router.navigate(["/maintenance"]);
  }

  wmaint() {  
    this.router.navigate(["/weekly-maintenance-list"]);
  }

  greasing() {  
    this.router.navigate(["/greasing-list"]);
  }

  lubricant() {  
    this.router.navigate(["/lubricant-list"]);
  }

  shutdownmaintenance() {  
    this.router.navigate(["/shutdownmaintenance-list"]);
  }

  communication() {  
    this.router.navigate(["/maintenancereport"]);
  }

  report() {  
    this.router.navigate(["/communication"]);
  }

}
