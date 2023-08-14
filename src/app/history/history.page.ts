import { Component, OnInit, NgZone } from "@angular/core";
import { FormControl, FormBuilder } from "@angular/forms";
import { AIREIService } from "../api/api.service";
import { Router } from "@angular/router";
import * as moment from "moment";

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "../services/authguard/auth-guard.service";
import { GradingServiceService } from "../services/grading-service/grading-service.service";
import { SecurityServiceService } from "../services/security-service/security-service.service";
const { PushNotifications } = Plugins;

@Component({
  selector: "app-history",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"],
})
export class HistoryPage implements OnInit {
  tabs_segment;
  total_net_weight;
  historyForm;
  userlist = JSON.parse(localStorage.getItem("userlist"));
  historyOrders;
  ffbhistoryLength = 0;
  today = new Date().toISOString();
  startOfMonth = moment().startOf("month").format("YYYY-MM-DD");

  roleId;

  count = 0;
  constructor(
    private fb: FormBuilder,
    private zone: NgZone,
    private notifi: AuthGuardService,
    private router: Router,
    private service: AIREIService,
    private securityservice: SecurityServiceService,
    private gradingservice: GradingServiceService
  ) {
    this.roleId = this.userlist.userRoleId;

    this.historyForm = this.fb.group({
      fromdate: new FormControl(this.today),
      todate: new FormControl(this.today),
    });

    this.callApi();
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

  btn_detailAction(value) {
    this.router.navigate(["/detail-trans", { item: JSON.stringify(value) }]);
  }

  btn_detail(value) {
    this.router.navigate(["/driver-detail", { item: JSON.stringify(value) }]);
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  callApi() {
    if (this.roleId == "13") {
      this.tabs_segment = "ffb";

      this.getSecurityHistory(this.tabs_segment);
    }
    if (this.roleId == "12") {
      this.getGradingHistory();

      // gradinginsertedlistwithdatefilter
    }
    if (this.roleId == "23") {
      this.getFFBHistory();
    }

    if (this.roleId == "11") {
      this.getDriverHistory();
    }
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getLiveNotification();

    this.callApi();
  }

  btn_mapAction(value, roleId) {
    this.router.navigate([
      "/googlemap",
      {
        item: JSON.stringify(value),
        type: "history",
        additional: "",
        roleid: roleId,
      },
    ]);
  }

  ionViewDidEnter() {
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getLiveNotification();

    this.callApi();
  }

  getFFBHistory() {
    var req = {
      fromdate: this.historyForm.value.fromdate,
      todate: this.historyForm.value.todate,
      acc_id: this.userlist.accId,
      userid: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getHistory(req, "").then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.historyOrders = resultdata.data;
        this.total_net_weight = resultdata.total_net_weight;
        this.ffbhistoryLength = this.historyOrders.length;
      } else {
        this.historyOrders = [];
        this.ffbhistoryLength = 0;
        this.service.presentToast("No Record Found!");
      }
    });
  }

  getDriverHistory() {
    var req = {
      fromdate: this.historyForm.value.fromdate,
      todate: this.historyForm.value.todate,
      driverloginid: this.userlist.userId,
      millcode: this.userlist.millcode,
    };

    this.service.getDriverHistory(req, "").then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.historyOrders = resultdata.data;
      } else {
        this.historyOrders = [];
        this.service.presentToast("No Record Found!");
      }
    });
  }

  /*getDriverHistory() {
    var req = {
      fromdate: this.historyForm.value.fromdate,
      todate: this.historyForm.value.todate,      
      acc_id: this.userlist.accId,
      userid: this.userlist.userId,
      millcode: this.userlist.millcode
    };

    this.service.getHistory(req, '').then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.historyOrders = resultdata.data
      } else {
        this.historyOrders = []
        this.service.presentToast('No Record Found!')
      }
    });
  }*/

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

  getSecurityHistory(type) {
    var req = {
      fromdate: this.historyForm.value.fromdate,
      todate: this.historyForm.value.todate,
      userid: this.userlist.userId,
      acc_id: this.userlist.accId,
      millcode: this.userlist.millcode,
    };

    this.securityservice.getSecurityHistory(req, type).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.historyOrders = resultdata.data;
      } else {
        this.historyOrders = [];
        this.service.presentToast("No Record Found!");
      }
    });
  }

  getGradingHistory() {
    var req = {
      user_id: this.userlist.userId,
      fromdate: this.historyForm.value.fromdate,
      todate: this.historyForm.value.todate,
      millcode: this.userlist.millcode,
      language: this.userlist.language,
    };

    //console.log(req);

    this.gradingservice.getGradingHistory(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.historyOrders = resultdata.data;
      } else {
        this.historyOrders = [];
        this.service.presentToast("No Record Found!");
      }
    });
  }

  segmentChanged(ev: any) {
    console.log("Segment changed", ev.detail.value);

    this.getSecurityHistory(ev.detail.value);
  }
}
