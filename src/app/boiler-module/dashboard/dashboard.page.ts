import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { DatePicker } from "@ionic-native/date-picker/ngx";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { File } from "@ionic-native/file/ngx";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { BoilerServiceService } from "src/app/services/boiler-service/boiler-service.service";
import {
  Platform,
  ModalController,
  AlertController,
  IonList,
} from "@ionic/angular";
import * as moment from "moment";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
const { PushNotifications } = Plugins;

import { OnehourentryPage } from "src/app/boiler-module/onehourentry/onehourentry.page";
import { TwohoursentryPage } from "src/app/boiler-module/twohoursentry/twohoursentry.page";
import { FourhoursentryPage } from "src/app/boiler-module/fourhoursentry/fourhoursentry.page";
import { TwelvehoursentryPage } from "src/app/boiler-module/twelvehoursentry/twelvehoursentry.page";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  @ViewChild("notificationlist") notificationlist: IonList;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  checkinouttime = moment(new Date().toISOString()).format("HH:mm");

  count = 0;
  checkcount = 0; /*To send API*/
  checkinoutflag = 0; /*To check status*/

  boilercheckcount = 0; /*To send API*/
  boilerstatusflag = 0; /*To check status*/

  shiftid = "";
  shiftdate = "";
  shiftstatus = "";

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
    private file: File,
    private platform: Platform,
    private imgUpload: ImageUploadService,
    private fb: FormBuilder,
    private service: BoilerServiceService,
    private generalservice: GeneralserviceService,
    private appVersion: AppVersion,
    private market: Market
  ) {
    this.dashboardForm = this.fb.group({
      shift: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    //this.callAPI();

    this.getcheckinstatus();

    this.getBoilerstatus();

    this.forceUpdated();
  }

  ionViewDidEnter() {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    //this.callAPI();

    this.getcheckinstatus();

    this.getBoilerstatus();

    this.forceUpdated();
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

    if (status == "1HOUR") {
      color = "#C27000";
    }

    if (status == "2HOUR") {
      color = "#E53327";
    }

    if (status == "4HOUR") {
      color = "#000000";
    }

    if (status == "12HOUR") {
      color = "#820000";
    }

    if (status == "BROADCAST") {
      color = "#2D3436";
    }

    if (status == "PERSONAL") {
      color = "#002447";
    }

    color = "#FFFFFF";

    return color;
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

        this.shiftid = resultdata.shiftid;
        this.shiftdate = resultdata.shifdate;
        this.shiftstatus = resultdata.shift;

        /*localStorage.setItem("shiftid", this.shiftid);
        localStorage.setItem("shiftdate", this.shiftdate);
        localStorage.setItem("shiftstatus", this.shiftstatus);*/

        this.generalservice.shiftid = this.shiftid;
        this.generalservice.shiftdate = this.shiftdate;
        this.generalservice.shiftstatus = this.shiftstatus;
        this.generalservice.checkinoutflag = this.checkinoutflag.toString();
      } else {
        this.checkinoutflag = 0;
        this.selectshift.form = 0;

        this.shiftid = "";
        this.shiftdate = "";
        this.shiftstatus = "";

        /*localStorage.setItem("shiftid", this.shiftid);
        localStorage.setItem("shiftdate", this.shiftdate);
        localStorage.setItem("shiftstatus", this.shiftstatus);*/

        this.generalservice.shiftid = this.shiftid;
        this.generalservice.shiftdate = this.shiftdate;
        this.generalservice.shiftstatus = this.shiftstatus;
        this.generalservice.checkinoutflag = this.checkinoutflag.toString();
      }

      //this.commonservice.presentToast(this.shiftstatus);

    });
  }

  getBoilerstatus() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getboilerStatus(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.boilerstatusflag = resultdata.boiler_status;
        this.generalservice.boilerstatus = this.boilerstatusflag.toString();
      } else {
        this.boilerstatusflag = 0;
        this.generalservice.boilerstatus = this.boilerstatusflag.toString();
      }
    });
  }

  confirmShift(value) {
    let alertmessage = "";

    if (value == 0) {
      alertmessage = "Are you sure to Start Shift";

      this.alertController
        .create({
          header: "Confirm!",
          message: alertmessage,
          cssClass: "alert-message",
          backdropDismiss: false,
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
                this.shiftapi("");
                console.log("Confirm Okay");
              },
            },
          ],
        })
        .then((res) => {
          res.present();
        });
    } else {
      alertmessage = "Are you sure to End Shift";

      this.alertController
        .create({
          header: "Confirm!",
          message: alertmessage,
          cssClass: "alert-message",
          backdropDismiss: false,
          inputs: [
            {
              name: "Comments",
              type: "textarea",
              placeholder: "Boilerman Comments",
            },
          ],
          buttons: [
            {
              text: "Cancel",
              handler: (data: any) => {
                //console.log("Canceled", data);
              },
            },
            {
              text: "Okay",
              handler: (data: any) => {
                if (data.Comments != "") {
                  this.shiftapi(data.Comments);
                } else {
                  this.commonservice.presentToast(
                    "Boilerman Comments is Mandatory"
                  );
                }
              },
            },
          ],
        })
        .then((res) => {
          res.present();
        });
    }
  }

  async confirmBoilerStatus(value) {
    if (this.shiftid != "") {
      let alertmessage = "";
      if (value == 0) {
        alertmessage = "Are you sure to Start-Up Boiler";
      } else {
        alertmessage = "Are you sure to Shutdown Boiler";
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
              this.boilerstatusapi();
              console.log("Confirm Okay");
            },
          },
        ],
      });

      await alert.present();
    } else {
      this.commonservice.presentToast("Shift Details not Found...");
    }
  }

  shiftapi(boilermancomments) {
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
        comments: boilermancomments,
      };

      this.service.saveBoilershift(req).then((result) => {
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

  boilerstatusapi() {
    if (this.dashboardForm.valid) {
      if (this.boilerstatusflag == 0) {
        this.boilercheckcount = 1;
      }

      if (this.boilerstatusflag == 1) {
        this.boilercheckcount = 0;
      }

      const req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        name: this.userlist.name,
        role_id: this.userlist.userRoleId,
        time: this.checkinouttime,
        Status: this.boilercheckcount,
        Shift_id: this.shiftid,
        boiler_name: "",
      };

      //console.log(req);

      this.service.saveBoilerstartstop(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.getBoilerstatus();

          if (this.boilerstatusflag == 0) {
            this.commonservice.presentToast("Boiler Started Successfully!");
          } else {
            this.commonservice.presentToast("Boiler Shutdown Successfully!");
          }
        } else {
          this.commonservice.presentToast("Saved Failed!");
        }
      });
    } else {
      this.commonservice.presentToast("Shift selection is Mandatory...");
    }
  }

  removeitem(value) {
    //this.commonservice.presentToast(value.id);

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

        this.ngAfterViewInit();
      }
    });
  }

  updateitem(value) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      id: value.id,
    };

    this.commonservice.deletedasboardnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.callmodalcontroller(value);
      }
    });
  }

  async callmodalcontroller(value) {
    if (value.redirect == "1HOUR") {
      const modal = await this.modalController.create({
        component: OnehourentryPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }

    if (value.redirect == "2HOUR") {
      const modal = await this.modalController.create({
        component: TwohoursentryPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }

    if (value.redirect == "4HOUR") {
      const modal = await this.modalController.create({
        component: FourhoursentryPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }

    if (value.redirect == "12HOUR") {
      const modal = await this.modalController.create({
        component: TwelvehoursentryPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }

    if (value.redirect == "BROADCAST") {
      this.router.navigate(["/boiler-broadcastchat"]);
    }

    if (value.redirect == "PERSONAL") {
      /*this.router.navigate([
        "/boiler-personalizedchat",
        { departmentid: value.baseid },
      ]);*/

      this.router.navigate(["/boiler-personalizedchatdepartments"]);
    }
  }
}
