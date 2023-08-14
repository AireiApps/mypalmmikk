import { Component, OnInit, NgZone } from "@angular/core";
import { appsettings } from "src/app/appsettings";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
const { PushNotifications } = Plugins;

import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { ModalController } from "@ionic/angular";

import { BoilercommunicationPutPage } from "src/app/boiler-module/boilercommunication-put/boilercommunication-put.page";
import { BroadcastcommunicationreportPage } from "src/app/boiler-module/broadcastcommunicationreport/broadcastcommunicationreport.page";
import { PersonalizedcommunicationreportPage } from "src/app/boiler-module/personalizedcommunicationreport/personalizedcommunicationreport.page";

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-communicationreport",
  templateUrl: "./communicationreport.page.html",
  styleUrls: ["./communicationreport.page.scss"],
})
export class CommunicationreportPage implements OnInit {
  
  
  //mill_name = appsettings.MILL_NAME;  

  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;

  count = 0;
  brodacastcommcount = 0; /*Broadcdast notification count*/
  personalizedcommcount = 0; /*Personalized notification count*/

  itemsArr = [
    [
      {
        title: this.translate.instant("COMMUNICATIONHOME.broadcastchats"),
        name: "Broadcast Communication",
        path: "/boiler-broadcastchat",
        imgpath: "../../assets/img/broadcastlog.png",
      },
      {
        title: this.translate.instant(
          "COMMUNICATIONHOME.personalizedchats"
        ),
        name: "Personalized Communication",
        path: "/boiler-personalizedchatdepartments",
        imgpath: "../../assets/img/personlizedlog.png",
      },
    ],
  ];

  constructor(
    private translate: TranslateService,
    private zone: NgZone,
    private httpservice: HttpserviceService,
    private notifi: AuthGuardService,
    private router: Router,
    private service: AIREIService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

    this.getreportnotification();
  }

  ionViewDidEnter() {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();

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

    //console.log(req);

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
        // alert('Push received: ' + JSON.stringify(notification));
        this.updateNotification();
      }
    );
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
