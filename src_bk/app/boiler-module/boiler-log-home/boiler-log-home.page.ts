import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BoilerServiceService } from "src/app/services/boiler-service/boiler-service.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { AIREIService } from "src/app/api/api.service";
import { Platform, AlertController } from "@ionic/angular";
import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
const { PushNotifications } = Plugins;

import { TranslateService } from "@ngx-translate/core";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: "app-boiler-log-home",
  templateUrl: "./boiler-log-home.page.html",
  styleUrls: ["./boiler-log-home.page.scss"],
})
export class BoilerLogHomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;

  count = 0;

  itemsArr = [
    [
      {
        title: this.translate.instant("BOILERHOME.boilerlog"),
        name: "BoilerLogEntry",
        path: "/boiler-log-entry",
        imgpath: "../../assets/img/boilerlog.png",
      },
      // {
      //   title: this.translate.instant("BOILERHOME.turbineperformance"),
      //   path: "/turbineperformance",
      //   imgpath: "../../assets/img/turbineperformance.png",
      // },
      {
        title: this.translate.instant("BOILERHOME.boilerlogbook"),
        name: "BoilerLogBook",
        path: "/boilelogbook",
        imgpath: "../../assets/img/viewlog.png",
      },
    ],
    [
      // {
      //   title: this.translate.instant("BOILERHOME.boilerperformance"),
      //   path: "/boilerperformancedata",
      //   imgpath: "../../assets/img/boilerperformance.png",
      // },
      {
        title: this.translate.instant("BOILERHOME.breakdowndowntime"),
        name: "Breakdown/Downtime",
        path: "/boiler-breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: this.translate.instant("BOILERHOME.reportedmaintenace"),
        name: "ReportedMaintenance",
        path: "/boiler-reportedmaintenance-list",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
    ],
    [
      {
        title: this.translate.instant("BOILERHOME.requestitem"),
        name: "Request Item",
        path: "/orderreqlist",
        imgpath: "../../assets/img/orderrequest.png",
      },
    ],
  ];

  constructor(
    private translate: TranslateService,
    private zone: NgZone,
    private router: Router,
    private fb: FormBuilder,
    private notifi: AuthGuardService,
    private commonservice: AIREIService,
    private service: BoilerServiceService,
    private httpservice: HttpserviceService,
    private platform: Platform,
    private alertCtrl: AlertController,
    private appVersion: AppVersion,
    private market: Market,
    private generalservice: GeneralserviceService
  ) {
    //generalservice.loginstate = true;
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
  }

  ionViewDidEnter() {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
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

  btn_Action(item) {
    if (this.generalservice.boilerstatus == "1") {
      if (item.name == "BoilerLogEntry") {
        if (this.generalservice.checkinoutflag == "1") {
          this.router.navigate([
            item.path,
            {
              shiftid: this.generalservice.shiftid,
              shiftdate: this.generalservice.shiftdate,
            },
          ]);
        }else{
          this.commonservice.presentToast("Please Start your Shift");
        }
      } else {
        this.router.navigate([
          item.path,
          {
            shiftid: this.generalservice.shiftid,
            shiftdate: this.generalservice.shiftdate,
          },
        ]);
      }
    } else {
      if (item.name == "BoilerLogBook") {
        this.router.navigate([
          item.path,
          {
            shiftid: this.generalservice.shiftid,
            shiftdate: this.generalservice.shiftdate,
          },
        ]);
      } else {
        this.commonservice.presentToast("Please Start-Up Boiler");
      }
    }
  }
}
