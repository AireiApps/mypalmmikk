import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { ModalController, AlertController, IonList } from "@ionic/angular";
import * as moment from "moment";
import { BoilerServiceService } from "src/app/services/boiler-service/boiler-service.service";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: 'app-boiler-breakdown-list',
  templateUrl: './boiler-breakdown-list.page.html',
  styleUrls: ['./boiler-breakdown-list.page.scss'],
})
export class BoilerBreakdownListPage implements OnInit {

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
    private service: BoilerServiceService,
    private generalservice: GeneralserviceService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getBreakdownDowntime();
  }

  ionViewDidEnter() {

    this.commonservice.presentLoading();

    this.getBreakdownDowntime();
  }

  getBreakdownDowntime() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      dept_id: this.userlist.dept_id,
      category_id: 4,
      language: this.userlist.language,
      breakdownid: 0,
    };

    this.service.getBreakdownDowntimeList(req).then((result) => {
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
    this.router.navigate(["/boiler-breakdown-new"]);
  }

  goback() {
    this.router.navigate(["tabs/tabboiler"]);
  }

}
