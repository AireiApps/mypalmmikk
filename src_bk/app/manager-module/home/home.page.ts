import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { ManagerServiceService } from "src/app/services/manager-service/manager-service.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { AIREIService } from "src/app/api/api.service";
import * as moment from "moment";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
const { PushNotifications } = Plugins;

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  count = 0;

  /*itemsArr = [
    [
      {
        title: "Request Item",
        path: "/managerorderreqlist",
        imgpath: "../../assets/img/orderrequest.png",
      },
      {
        title: "Production Report",
        path: "/managerproductionreport",
        imgpath: "../../assets/img/productionreport.png",
      },
    ],
    [
      {
        title: "Maintenance Report",
        path: "/managermaintenancereport",
        imgpath: "../../assets/img/weeklymaintenancereport.png",
      },
      {
        title: "Comm.",
        path: "/managercommunication",
        imgpath: "../../assets/img/communicationhistory.png",
      },
    ],
    [
      {
        title: "Quote Approval",
        path: "/quoteapproval",
        imgpath: "../../assets/img/palmoilquoteapproval.png",
      },
      {
        title: "Breakdown/Downtime",
        path: "/engineer-breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
    ],
  ];*/

  itemsArr = [
    [
      {
        title: this.translate.instant("MANAGERHOME.breakdowndowntime"),
        name: "Breakdown/Downtime",
        path: "/manager-breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: this.translate.instant("MANAGERHOME.reportedmaintenace"),
        name: "ReportedMaintenance",
        path: "/manager-reportedmaintenance",
        imgpath: "../../assets/img/reportedmaintenance.png",
      },
    ],
    [
      {
        title: this.translate.instant("MANAGERHOME.quotation"),
        name: "Quotation",
        path: "/quoteapproval",
        imgpath: "../../assets/img/palmoilquoteapproval.png",
      },
      {
        title: this.translate.instant("MANAGERHOME.boilerlogbook"),
        name: "BoilerLogBook",
        path: "/manager-logbook",
        imgpath: "../../assets/img/viewlog.png",
      },
    ],
    [
      {
        title: this.translate.instant("MANAGERHOME.requestitem"),
        name: "Request Item",
        path: "/managerorderreqlist",
        imgpath: "../../assets/img/orderrequest.png",
      },
      {
        title: this.translate.instant("MANAGERHOME.reports"),
        path: "/manager-reports",
        imgpath: "../../assets/img/ceoreport.png",
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
    private service: ManagerServiceService,
    private httpservice: HttpserviceService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();

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
    this.router.navigate([item.path]);
  }
}
