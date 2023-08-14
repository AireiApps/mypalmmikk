import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { ModalController, AlertController, IonList, Platform } from "@ionic/angular";
import * as moment from "moment";
import { EngineerServiceService } from "src/app/services/engineer-service/engineer-service.service";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
const { PushNotifications } = Plugins;

import { BroadcastcommunicationPage } from "src/app/engineer-module/broadcastcommunication/broadcastcommunication.page";
import { PersonalizecommunicationPage } from "src/app/engineer-module/personalizecommunication/personalizecommunication.page";

import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: 'app-engineer-dashboard',
  templateUrl: './engineer-dashboard.page.html',
  styleUrls: ['./engineer-dashboard.page.scss'],
})
export class EngineerDashboardPage implements OnInit {
  @ViewChild("notificationlist") notificationlist: IonList;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  checkinouttime = moment(new Date().toISOString()).format("HH:mm");

  count = 0;
  schedulecount = 0;

  checkcount = 0; /*To send API*/
  checkinoutflag = 0; /*To check status*/
  shiftid = "";
  shiftdate = "";

  dashboardArr = [];

  todaydate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  selectshift = {
    form: null,
  };

  dashboardForm;

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,
    private httpservice: HttpserviceService,
    private notifi: AuthGuardService,
    private router: Router,
    private commonservice: AIREIService,
    private fb: FormBuilder,
    private service: EngineerServiceService,
    private platform: Platform,
    private appVersion: AppVersion,
    private market: Market
  ) {
    this.dashboardForm = this.fb.group({
      shift: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    this.callAPI();

    this.getcheckinstatus();

    this.forceUpdated();
  }

  ionViewDidEnter() {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    this.callAPI();

    this.getcheckinstatus();

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

  getStatusColor(status) {
    let color;

    if (status == "PREVENTIVE MAINTENANCE") {
      color = "#D3D3D3";
    }

    if (status == "BREAKDOWN / DOWNTIME") {
      //color = 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);'
      //color = '#00a2ff'
      color = "#BA9A8E";
    }

    if (status == "REPORTED MAINTENANCE") {
      color = "#FFD45C";
    }

    if (status == "NEW JOB ASSIGNMENT") {
      color = "#7EE8FA";
    }

    if (status == "BROADCAST") {
      color = "#FFB4A2";
    }

    if (status == "PERSONAL") {
      color = "#E899DC";
    }
    return color;
  }

  callAPI() {
    const req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.commonservice.getdashboardnotification(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.dashboardArr = resultdata.data;
      } else {
        this.commonservice.presentToast("Notifications Not Found...");
      }
    });
  }

  getcheckinstatus() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getCheckInStatus(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.checkinoutflag = resultdata.status;
        this.selectshift.form = resultdata.shift;

        localStorage.setItem("shiftid", resultdata.shiftid);
        localStorage.setItem("shiftdate", resultdata.shifdate);

        this.shiftid = resultdata.shiftid;
        this.shiftdate = resultdata.shifdate;
      } else {
        this.checkinoutflag = 0;
        this.selectshift.form = 0;

        localStorage.setItem("shift", "");
        localStorage.setItem("shiftdate", "");

        this.shiftid = "";
        this.shiftdate = "";
      }
    });
  }

  async confirmShift(value) {
    let alertmessage = "";
    if (value == 0) {
      alertmessage = "Are you sure to Start Shift";
    } else {
      alertmessage = "Are you sure to End Shift";
    }

    const alert = await this.alertController.create({
      header: "Confirm!",
      message: alertmessage,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (cancel) => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Okay",
          handler: () => {
            this.shiftapi();
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }

  shiftapi() {
    if (this.dashboardForm.valid) {
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
        Shift: this.dashboardForm.value.shift,
      };

      this.service.saveEngineershift(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
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
    } else {
      this.commonservice.presentToast("Shift selection is Mandatory...");
    }
  }

  removeitem(value) {
    this.notificationlist.closeSlidingItems();

    this.callremoveitem(value.id);
  }

  callremoveitem(notificationid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      id: notificationid,
    };

    this.commonservice.deletedasboardnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast("Deleted Successfully...");

        this.ionViewDidEnter();
      }
    });
  }

  updateitem(value) {
    //this.callmodalcontroller(value);
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      id: value.id,
    };

    //console.log(req);

    this.commonservice.deletedasboardnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.callmodalcontroller(value);
      } else {
        this.commonservice.presentToast("Notification Update Failed");
      }
    });
  }

  async callmodalcontroller(value) {
    if (value != "") {
      if (value.redirect == "BROADCAST") {
        const modal = await this.modalController.create({
          component: BroadcastcommunicationPage,
        });

        modal.onDidDismiss().then((data) => {
          this.ngAfterViewInit();
        });

        return await modal.present();
      }

      if (value.redirect == "PERSONAL") {
        const modal = await this.modalController.create({
          component: PersonalizecommunicationPage,
        });

        modal.onDidDismiss().then((data) => {
          this.ngAfterViewInit();
        });

        return await modal.present();
      }
    }
  }

}
