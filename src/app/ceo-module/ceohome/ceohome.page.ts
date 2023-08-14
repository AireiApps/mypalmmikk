import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { ModalController, AlertController, Platform } from "@ionic/angular";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { AIREIService } from "src/app/api/api.service";

import { SchedulePage } from "src/app/maintenance-module/schedule/schedule.page";

import { Market } from "@ionic-native/market/ngx";
import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: "app-ceohome",
  templateUrl: "./ceohome.page.html",
  styleUrls: ["./ceohome.page.scss"],
})
export class CeohomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  mill_name = this.userlist.millname;

  constructor(
    private router: Router,
    public modalController: ModalController,
    private httpservice: HttpserviceService,
    private zone: NgZone,
    private platform: Platform,
    public alertController: AlertController,
    private commonservice: AIREIService,
    private appVersion: AppVersion,
    private market: Market
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.forceUpdated();
  }

  ionViewDidEnter() {
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

  dashboard() {
    this.router.navigate(["/ceodashboard"]);
  }

  reviewreport() {
    this.router.navigate(["/abcdreport"]);
  }

  monthlyreports() {
    this.router.navigate(["/ceomonthlyreports"]);
  }

  /*Commented on 17.03.2021 as Said by Veda Sir
  reports() {
    this.router.navigate(["/ceoreports"]);
  }*/

  reports() {
    this.router.navigate(["/ceo-dailyreports"]);
  }

  approvals() {
    this.router.navigate(["/approvals-home"]);
  }

  hourly() {
    this.router.navigate(["/hourly-reports-home"]);
  }

  ffblivetrackingreport() {
    this.router.navigate(["/livetrackingreport"]);
  }

  useractivity() {
    this.router.navigate(["/ceo-userlogreport"]);
  }

  financialreports() {
    this.router.navigate(["/ceo-financialreports-home"]);
  }

  logout() {
    this.confirmlogout();
  }

  async confirmlogout() {
    const alert = await this.alertController.create({
      header: "Logout from your Account",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (cancel) => {},
        },
        {
          text: "Logout",
          handler: () => {
            localStorage.clear();
            this.router.navigateByUrl("/login");
          },
        },
      ],
    });

    await alert.present();
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  async callmodalcontroller(value) {
    const modal = await this.modalController.create({
      component: SchedulePage,
    });

    modal.onDidDismiss().then((data) => {});

    return await modal.present();
  }
}
