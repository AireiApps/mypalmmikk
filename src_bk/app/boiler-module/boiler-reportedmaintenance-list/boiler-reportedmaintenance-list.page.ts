import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";
import { BoilerServiceService } from "src/app/services/boiler-service/boiler-service.service";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: "app-boiler-reportedmaintenance-list",
  templateUrl: "./boiler-reportedmaintenance-list.page.html",
  styleUrls: ["./boiler-reportedmaintenance-list.page.scss"],
})
export class BoilerReportedmaintenanceListPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  shiftid = '';
  shiftdate = '';

  breakdowndowntimelistArr = [];

  enableflag = false;

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService,
    private service: BoilerServiceService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getReportedMaintenance();
  }

  ionViewDidEnter() {

    this.commonservice.presentLoading();

    this.getReportedMaintenance();
  }

  getReportedMaintenance() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      category_id: 3,
      breakdownid: 0,
    };

    this.service.getReportedMaintenanceList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.breakdowndowntimelistArr = resultdata.data;
        this.enableflag = false;
      } else {
        this.breakdowndowntimelistArr = [];
        //this.commonservice.presentToast("No Records Found...");
        this.enableflag = true;
      }
    });
  }

  btn_BreakdownDowntime() {
    this.router.navigate(["/boiler-reportedmaintenance-new"]);
  }

  goback() {
    this.router.navigate(["tabs/tabboiler"]);
  }
}
