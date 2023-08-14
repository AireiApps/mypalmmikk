import { Component, OnInit, NgZone } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
const { PushNotifications } = Plugins;
import { appsettings } from "src/app/appsettings";
import { GradingServiceService } from "src/app/services/grading-service/grading-service.service";

import { AlertController, Platform } from "@ionic/angular";
import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: "app-grading-dashboard",
  templateUrl: "./grading-dashboard.page.html",
  styleUrls: ["./grading-dashboard.page.scss"],
})
export class GradingDashboardPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  department_id = this.userlist.dept_id;
  language = this.userlist.language;
  mill_code = this.userlist.millcode;
  mill_name = this.userlist.millname;

  baseurl = this.userlist.report_url;

  weburl;

  count = 0;
  gradingcount = 0;

  constructor(
    private zone: NgZone,
    private notifi: AuthGuardService,
    private router: Router,
    private commonservice: AIREIService,
    private service: GradingServiceService,
    private platform: Platform,
    public alertController: AlertController,
    private appVersion: AppVersion,
    private market: Market
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {

    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getLiveNotification();

    this.forceUpdated();

    this.getUrl();
  }

  ionViewDidEnter() {

    PushNotifications.removeAllDeliveredNotifications();
    
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getLiveNotification();

    this.forceUpdated();

    this.getUrl();
  }

  forceUpdated() {
    var app_version;

    this.appVersion.getVersionNumber().then(
      (versionNumber) => {
        app_version = versionNumber;

        let req = {
          user_id: this.userlist.userId,
          millcode: this.userlist.millcode,
          dept_id: this.userlist.dept_id,
        };

        this.commonservice.getSettings(req).then((result) => {
          var resultdata: any;
          resultdata = result;
          let updateVersion = resultdata.appVersion;

          if (updateVersion > app_version) {
            this.alertForce(updateVersion);
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async alertForce(app_version) {
    let alert = await this.alertController.create({
      header: "New Version Available",
      backdropDismiss: false,
      message:
        "A new version of MyPalm is available, Please update a version " + app_version,
      buttons: [       
        {
          text: "Update",
          handler: () => {
            let appId;

            if (this.platform.is("android")) {
              appId = "com.airei.milltracking.mypalm.mikk";
            } else {
              appId = "id1573914314";
            }

            this.market
              .open(appId)
              .then((response) => {
                console.debug(response);
              })
              .catch((error) => {
                console.warn(error);
              });
          },
        },
      ],
    });
    alert.present();
  }

  btn_detailAction(value) {
    this.router.navigate(["/detail-trans", { item: JSON.stringify(value) }]);
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

  /*getGrading() {
    var req = {
      userid: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getGradingList(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.gradingcount = resultdata.data.length();
      } else {
        this.gradingcount = 0;
      }
    });
  }*/

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/WB_dashboard/mobile?user_id=" +
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }

  btn_ReceiveGrading() {
    this.router.navigate(["/grading-manualform"]);
  }

  btn_GradingHome() {
    this.router.navigate(["/gradinghome"]);
  }
}
