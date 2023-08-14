import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";

@Component({
  selector: "app-diesolineconsumptionreport",
  templateUrl: "./diesolineconsumptionreport.page.html",
  styleUrls: ["./diesolineconsumptionreport.page.scss"],
})
export class DiesolineconsumptionreportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  mill_name = this.userlist.millname;
  language = this.userlist.language;
  
  baseurl = this.userlist.report_url;

  weburl;

  constructor(
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
      "/index.php/Monthly_reports/Diesoline_consumption?mobile=1&user_id=" +
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
