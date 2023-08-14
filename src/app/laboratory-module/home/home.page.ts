import { Component, OnInit, NgZone } from "@angular/core";
import { appsettings } from "src/app/appsettings";
import { Router } from "@angular/router";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { AIREIService } from "src/app/api/api.service";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
const { PushNotifications } = Plugins;

import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";

import { ModalController } from "@ionic/angular";

//import { CommunicationPage } from "src/app/laboratory-module/communication/communication.page";
//import { BroadcastcommunicationPage } from "src/app/laboratory-module/broadcastcommunication/broadcastcommunication.page";
//import { PersonalizecommunicationPage } from "src/app/laboratory-module/personalizecommunication/personalizecommunication.page";

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  language = this.userlist.language;
  baseurl = this.userlist.report_url;

  count = 0;

  mill_name = this.userlist.millname;

  weburl;

  constructor(
    private zone: NgZone,
    private notifi: AuthGuardService,
    private router: Router,
    private commonservice: AIREIService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {

    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getLiveNotification();

    this.getUrl();
  }

  ionViewWillEnter() {
    PushNotifications.removeAllDeliveredNotifications();
    
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getLiveNotification();

    this.getUrl();
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  updateNotification() {
    this.zone.run(() => {
      this.count = parseInt(localStorage.getItem("badge_count"));
    });
  }

  getLiveNotification() {
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        // alert('Push received: ' + JSON.stringify(notification));
        this.updateNotification();
      }
    );
  }

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/Lab_hourly_check?user_id=" +
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
