import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-weighbridgereport",
  templateUrl: "./weighbridgereport.page.html",
  styleUrls: ["./weighbridgereport.page.scss"],
})
export class WeighbridgereportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  department_id = this.userlist.dept_id;
  mill_code = this.userlist.millcode;
  mill_name = this.userlist.millname;

  language = this.userlist.language;

  baseurl = this.userlist.report_url;

  weburl;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private httpservice: HttpserviceService,
    private zone: NgZone
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ionViewWillEnter() {
    this.getUrl();
  }

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/Weighbridge?mobile=1&user_id=" +
      this.user_id +
      "&department_id=" +
      this.department_id +
      "&millcode=" +
      this.mill_code +
      "&language" +
      this.language;

    this.weburl = formatedurl;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
