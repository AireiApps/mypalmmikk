import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-manager-reports",
  templateUrl: "./manager-reports.page.html",
  styleUrls: ["./manager-reports.page.scss"],
})
export class ManagerReportsPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  count = 0;
  brodacastcommcount = 0; /*Broadcdast notification count*/
  personalizedcommcount = 0; /*Personalized notification count*/

  /*reportArr = [
    {
      title: this.translate.instant("REPORTS.hourreporting"),
      path: "/report-hourlyreporting",
    },
    {
      title: this.translate.instant("REPORTS.sopcompliancereport"),
      path: "/report-sopcompliance",
    },
    {
      title: this.translate.instant("REPORTS.attendancereport"),
      path: "/attendancereport",
    },
    {
      title: this.translate.instant("REPORTS.compliancereport"),
      path: "/compliance",
    },
    {
      title: this.translate.instant("REPORTS.weighbridgereport"),
      path: "/weighbridgereport",
    },
  ];*/

  reportArr = [
    {
      title: "Lab Hourly Report",
      path: "/report-labhourlyreport",
    },
    {
      title: "Lab Daily Report",
      path: "/report-labdailyreport",
    },
    {
      title: "Mill Performance Report",
      path: "/report-millperformancereport",
    },
    {
      title: "Hourly Report",
      path: "/report-hourlyreport",
    },
    {
      title: "Boiler Log Report",
      path: "/report-boilerlogreport",
    },
    {
      title: "Production Report",
      path: "/report-productionreport",
    },
    {
      title: "Weighbridge Report",
      path: "/weighbridgereport",
    },
    {
      title: "Breakdown Report",
      path: "/report-breakdown",
    },
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: AIREIService,
    private translate: TranslateService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
