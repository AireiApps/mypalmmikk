import { Component, OnInit, NgZone } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ImageUploadService } from 'src/app/services/imageupload-service/imageupload';
import { File } from '@ionic-native/file/ngx';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import { appsettings } from 'src/app/appsettings';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-maintenance-dashboard',
  templateUrl: './maintenance-dashboard.page.html',
  styleUrls: ['./maintenance-dashboard.page.scss'],
})
export class MaintenanceDashboardPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  count = 0;

  dashboardArr = [
    {
      title: "1 Hour Notification",
      notification_text: "Updated 1 hour data - 30-12-2020 10:00",
      notification_date: "30-12-2020 10:00"
    },
    {
      title: "2 Hours Notification",
      notification_text: "Updated 2 hour data - 30-12-2020 11:00",
      notification_date: "30-12-2020 11:00"
    },
    {
      title: "4 Hours Notification",
      notification_text: "Updated 4 hour data - 30-12-2020 12:00",
      notification_date: "30-12-2020 12:00"
    },
    {
      title: "12 Hours Notification",
      notification_text: "Updated 12 hour data - 30-12-2020 14:00",
      notification_date: "30-12-2020 14:00"
    }
  ];

  constructor(private datePicker: DatePicker, private zone: NgZone, private httpservice: HttpserviceService, private notifi: AuthGuardService, private router: Router, private commonservice: AIREIService, private file: File, private imgUpload: ImageUploadService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.httpservice.getContactLogin();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();
  }

  btn_notification() {
    localStorage.setItem(
      "badge_count",
      "0"
    );
    this.router.navigate(["/notification"]);
  }

  updateNotification() {    
    this.zone.run(() => {
      this.count = parseInt(localStorage.getItem("badge_count"));
    });
  }

  getLiveNotification() {
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        // alert('Push received: ' + JSON.stringify(notification));
        this.updateNotification();
      }
    );
  }

  getStatusColor(status) {
    let color;

    if (status == '1 Hour Notification') {
      color = '#D3D3D3'
    }

    if (status == '2 Hours Notification') {
      color = '#BA9A8E'
    }

    if (status == '4 Hours Notification') {
      color = '#FFD45C'
    }

    if (status == '12 Hours Notification') {
      color = '#7EE8FA'
    }
    return color;
  }

}
