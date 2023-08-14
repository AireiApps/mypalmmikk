import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";
import { ManagerServiceService } from "src/app/services/manager-service/manager-service.service";

import { ManagerReportedmaintenanceDetailPage } from "src/app/manager-module/manager-reportedmaintenance-detail/manager-reportedmaintenance-detail.page";

@Component({
  selector: "app-manager-reportedmaintenance",
  templateUrl: "./manager-reportedmaintenance.page.html",
  styleUrls: ["./manager-reportedmaintenance.page.scss"],
})
export class ManagerReportedmaintenancePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  breakdowndowntimelistArr = [];

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService,
    private service: ManagerServiceService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getReportedMaintenance();
  }

  ionViewDidEnter() {
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

    //console.log(req);

    this.service.getReportedMaintenanceList(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.breakdowndowntimelistArr = resultdata.data;
      } else {
        this.breakdowndowntimelistArr = [];
        this.commonservice.presentToast("No Records Found...");
      }
    });
  }

  btn_BreakdownDowntime() {
    this.router.navigate(["/manager-reportedmaintenance-new"]);
  }

  async callmodalcontroller(value) {
    const modal = await this.modalController.create({
      component: ManagerReportedmaintenanceDetailPage,
      componentProps: {
        breakdownid: value.breakdown,
      },
    });

    modal.onDidDismiss().then((data) => {
      this.ngAfterViewInit();
    });

    return await modal.present();
  }
}
