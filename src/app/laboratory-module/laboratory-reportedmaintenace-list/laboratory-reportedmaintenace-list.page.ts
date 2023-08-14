import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";
import { LaboratoryServiceService } from "src/app/services/laboratory-service/laboratory-service.service";

@Component({
  selector: "app-laboratory-reportedmaintenace-list",
  templateUrl: "./laboratory-reportedmaintenace-list.page.html",
  styleUrls: ["./laboratory-reportedmaintenace-list.page.scss"],
})
export class LaboratoryReportedmaintenaceListPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  shiftid = localStorage.getItem("shiftid");
  shiftdate = localStorage.getItem("shiftdate");

  breakdowndowntimelistArr = [];

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private zone: NgZone,
    private router: Router,
    private commonservice: AIREIService,
    private service: LaboratoryServiceService
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
    this.router.navigate(["/laboratory-reportedmaintenace"]);
  }
}
