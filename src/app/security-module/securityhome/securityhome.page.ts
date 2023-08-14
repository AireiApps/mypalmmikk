import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import * as moment from "moment";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { SecurityServiceService } from "src/app/services/security-service/security-service.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
const { PushNotifications } = Plugins;

import { Platform, AlertController } from "@ionic/angular";
import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: "app-securityhome",
  templateUrl: "./securityhome.page.html",
  styleUrls: ["./securityhome.page.scss"],
})
export class SecurityhomePage implements OnInit {
  securityForm;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  checkinouttime = moment(new Date().toISOString()).format("HH:mm");

  count = 0;
  checkcount = 0;
  checkinoutflag = 0;
  checkinstatus: any;

  selectshift = {
    form: null,
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private zone: NgZone,
    private httpservice: HttpserviceService,
    private notifi: AuthGuardService,
    private service: SecurityServiceService,
    private commonservice: AIREIService,
    private platform: Platform,
    public alertController: AlertController,
    private appVersion: AppVersion,
    private market: Market
  ) {
    this.count = parseInt(localStorage.getItem("badge_count"));

    this.securityForm = this.fb.group({
      shift: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    this.forceUpdated();

    this.getcheckinstatus();
  }

  ionViewDidEnter() {
    PushNotifications.removeAllDeliveredNotifications();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    this.forceUpdated();

    this.getcheckinstatus();
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

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

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

  getcheckinstatus() {
    let req = {
      user_id: this.userlist.userId,
      desgin_id: this.userlist.desigId,
      usergroup_id: this.userlist.userGroupId,
      acc_id: this.userlist.accId,
      role_id: this.userlist.userRoleId,
      dept_id: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getCheckInStatus(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.checkinoutflag = resultdata.status;
        this.selectshift.form = resultdata.shift;
        localStorage.setItem("shift", resultdata.shift);
      } else {
        this.checkinoutflag = 0;
        this.selectshift.form = "";
        localStorage.setItem("shift", "");
      }
    });
  }

  showTimepicker() {
    if (this.securityForm.valid) {
      this.callapi();
    } else {
      this.commonservice.presentToast("Shift Selection is Mandatory");
    }
  }

  callapi() {
    if (this.checkinoutflag == 0) {
      this.checkcount = 1;
    }

    if (this.checkinoutflag == 1) {
      this.checkcount = 0;
    }

    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      name: this.userlist.name,
      role_id: this.userlist.userRoleId,
      time: this.checkinouttime,
      Status: this.checkcount,
      Shift: this.securityForm.value.shift,
    };

    //console.log(req);

    this.service.savesecurityshift(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.httpservice.getContactLogin();
        this.getcheckinstatus();

        if(this.checkcount==1)
        {
          this.commonservice.presentToast('Shift Started Successfully!');
        }else{
          this.commonservice.presentToast('Shift Stopped Successfully!');
        }
      } else {
        this.commonservice.presentToast('Shift Start Failed!');
      }
    });
  }

  btn_ffb() {
    this.router.navigate(["/ffbreceive"]);
  }

  btn_others() {
    this.router.navigate(["/securityothervehicle"]);
  }

  btn_reports() {
    this.router.navigate(["/securityrounds"]);
  }
}
