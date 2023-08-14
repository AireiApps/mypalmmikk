import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { appsettings } from "src/app/appsettings";
import { Router } from "@angular/router";
import { EngineerServiceService } from "src/app/services/engineer-service/engineer-service.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { AIREIService } from "src/app/api/api.service";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
const { PushNotifications } = Plugins;

import { ModalController } from "@ionic/angular";
import { CommunicationPage } from "src/app/maintenance-module/communication/communication.page";

@Component({
  selector: "app-engineerhome",
  templateUrl: "./engineerhome.page.html",
  styleUrls: ["./engineerhome.page.scss"],
})
export class EngineerhomePage implements OnInit {
  //mill_name = appsettings.MILL_NAME;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  
  mill_name = this.userlist.millname;

  count = 0;

  itemsArr = [
    [
      {
        title: "Request Item",
        path: "/engineerorderreqlist",
        imgpath: "../../assets/img/orderrequest.png",
      },
      {
        title: "Comm.",
        path: "/engineercommunication",
        imgpath: "../../assets/img/communicationhistory.png",
      },
      {
        title: "Production Report",
        path: "/engineerproductionreport",
        imgpath: "../../assets/img/productionreport.png",
      },
      {
        title: "Maintenance Report",
        path: "/engineermaintenancereport",
        imgpath: "../../assets/img/weeklymaintenancereport.png",
      },
      {
        title: "SOR Approval",
        path: "/sorengineerapproval",
        imgpath: "../../assets/img/palmoilquoteapproval.png",
      },
      {
        title: "Breakdown/Downtime",
        path: "/engineer-breakdown-list",
        imgpath: "../../assets/img/breakdownreport.png",
      },
    ],
  ];

  constructor(
    public modalController: ModalController,
    private zone: NgZone,
    private router: Router,
    private fb: FormBuilder,
    private notifi: AuthGuardService,
    private commonservice: AIREIService,
    private service: EngineerServiceService,
    private httpservice: HttpserviceService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {

    PushNotifications.removeAllDeliveredNotifications();

    this.httpservice.getContactLogin();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
  }

  ionViewDidEnter() {

    PushNotifications.removeAllDeliveredNotifications();

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
    if (item.title == "Comm.") {
      this.callmodalcontroller(item.title);
    }else
    {
      this.router.navigate([item.path]);
    }
  }

  async callmodalcontroller(value) {
    
    if(value=="Comm.")
    {
      const modal = await this.modalController.create({
        component: CommunicationPage,
      });

      return await modal.present();
    }

  }
}
