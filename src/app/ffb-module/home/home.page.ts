import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { FfbServiceService } from "src/app/services/ffb-service/ffb-service.service";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
const { PushNotifications } = Plugins;

import { ModalController, AlertController, Platform } from "@ionic/angular";
import { ProfilePage } from "src/app/ffb-module/profile/profile.page";
import { FfbdispatchPage } from "src/app/ffb-module/ffbdispatch/ffbdispatch.page";

import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  roleId = this.userlist.userRoleId;

  count = 0;
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  recentffbOrder = [];
  name = 1;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private httpservice: HttpserviceService,
    private zone: NgZone,
    private service: FfbServiceService,
    private commonservice: AIREIService,
    private notifi: AuthGuardService,
    private platform: Platform,
    public alertController: AlertController,
    private appVersion: AppVersion,
    private market: Market
  ) {}

  ngOnInit() {}

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  ngAfterViewInit(): void {
    //console.log("Page Loading .... 1");

    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
    this.getRecentFFBOrder();

    this.forceUpdated();
  }

  ionViewDidEnter() {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
    this.getRecentFFBOrder();

    this.forceUpdated();
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
        "A new version of MyPalm is available, Please update a version " +
        app_version,
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

  btn_mapAction(value) {
    /*this.router.navigate([
      "/googlemap",
      {
        item: JSON.stringify(value),
        type: "ffbsupplier",
        additional: "",
        roleid: this.roleId,
      },
    ]);*/

    this.router.navigate(["/livetracking", { item: JSON.stringify(value) }]);
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
        this.updateNotification();
      }
    );
  }

  btn_detailAction(value) {
    this.router.navigate(["/detail-trans", { item: JSON.stringify(value) }]);
  }

  getRecentFFBOrder() {
    let req = {
      acc_id: this.userlist.accId,
      millcode: this.userlist.millcode,
    };

    this.service.recentffbdeliverylist(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentffbOrder = [];
        this.recentffbOrder = resultdata.data;
      } else {
        this.recentffbOrder = [];
        this.commonservice.presentToast("No Records Found");
      }
    });
  }

  // profile_Action() {
  //   this.router.navigate(["/profile"]);
  // }
  // ffb_Action() {
  //   this.router.navigate(["/ffbdispatch"]);
  // }

  getStatusColor(status) {
    let color;

    if (status == "pending") {
      color = "#0000FF";
    }

    if (status == "inprogress") {
      color = "#FFA500";
    }

    if (status == "completed") {
      color = "#008000";
    }
    return color;
  }

  async callmodalcontroller(value) {
    if (value != "") {
      if (value == "PROFILE") {
        const modal = await this.modalController.create({
          component: ProfilePage,
        });

        modal.onDidDismiss().then((data) => {
          this.ngAfterViewInit();
        });

        return await modal.present();
      }

      if (value == "FFBDISPATCH") {
        const modal = await this.modalController.create({
          component: FfbdispatchPage,
        });

        modal.onDidDismiss().then((data) => {
          this.ngAfterViewInit();
        });

        return await modal.present();
      }
    }
  }
}
