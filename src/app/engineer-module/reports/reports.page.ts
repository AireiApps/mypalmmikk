import { Component, OnInit, NgZone } from "@angular/core";
import { appsettings } from "src/app/appsettings";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { AIREIService } from "src/app/api/api.service";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { Router } from "@angular/router";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
const { PushNotifications } = Plugins;

import { ModalController } from "@ionic/angular";

import { BroadcastcommunicationreportPage } from "src/app/engineer-module/broadcastcommunicationreport/broadcastcommunicationreport.page";
import { PersonlizecommunicationreportPage } from "src/app/engineer-module/personlizecommunicationreport/personlizecommunicationreport.page";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.page.html",
  styleUrls: ["./reports.page.scss"],
})
export class ReportsPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  //mill_name = appsettings.MILL_NAME;
  mill_name = this.userlist.millname;
  
  count = 0;
  brodacastcommcount = 0; /*Broadcdast notification count*/
  personalizedcommcount = 0; /*Personalized notification count*/

  itemsArr = [
    [
      {
        title: "Broadcast Comm.",
        path: "/broadcastcommunicationreport",
        imgpath: "../../assets/img/broadcastlog.png",
      },
      {
        title: "Personalized Comm.",
        path: "/personlizecommunicationreport",
        imgpath: "../../assets/img/personlizedlog.png",
      },
    ],
    [
      {
        title: "SOR History",
        path: "/engineersorhistory",
        imgpath: "../../assets/img/sorhistory.png",
      },
      {
        title: "Compliance",
        path: "/compliance",
        imgpath: "../../assets/img/compliance.png",
      },
    ],
  ];

  constructor(
    public modalController: ModalController,
    private notifi: AuthGuardService,
    private httpservice: HttpserviceService,
    private router: Router,
    private zone: NgZone,
    private service: AIREIService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getreportnotification();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getreportnotification();
  }

  getreportnotification() {
    let req = {
      userid: this.userlist.userId,
      desgin_id: this.userlist.desigId,
      usergroup_id: this.userlist.userGroupId,
      role_id: this.userlist.userRoleId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    this.service.getreportnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.brodacastcommcount = resultdata.brodacastcommcount;
        this.personalizedcommcount = resultdata.personalizedcommcount;
      } else {
        this.brodacastcommcount = 0;
        this.personalizedcommcount = 0;
      }
    });
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

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  btn_Action(item) {
    if ((item.title == "Broadcast Comm.") || (item.title == "Personalized Comm.")) {
      this.callmodalcontroller(item.title);
    } else {      
      this.router.navigate([item.path]);
    }
  }

  async callmodalcontroller(title) {
    if (title == "Broadcast Comm.") {
      const modal = await this.modalController.create({
        component: BroadcastcommunicationreportPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }

    if (title == "Personalized Comm.") {
      const modal = await this.modalController.create({
        component: PersonlizecommunicationreportPage,
      });

      modal.onDidDismiss().then((data) => {
        this.ngAfterViewInit();
      });

      return await modal.present();
    }
  }
}
