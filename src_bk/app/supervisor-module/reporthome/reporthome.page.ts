import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-reporthome",
  templateUrl: "./reporthome.page.html",
  styleUrls: ["./reporthome.page.scss"],
})
export class ReporthomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  count = 0;
  brodacastcommcount = 0; /*Broadcdast notification count*/
  personalizedcommcount = 0; /*Personalized notification count*/

  reportArr = [
    {
      title: this.translate.instant("REPORTS.attendancereport"),
      path: "/attendancereport",
    },
    {
      title: this.translate.instant("REPORTS.sopcompliancereport"),
      path: "/report-sopcompliance",
    },
    {
      title: this.translate.instant("REPORTS.hourreporting"),
      path: "/report-hourlyreporting",
    },
    {
      title: this.translate.instant("REPORTS.productionreport"),
      path: "/laboratoryreport",
    },   
    {
      title: "VS Information Cycle",
      path: "/ceo-vsinformationcycle",
    },
    {
      title: "VS Hourly Pressure",
      path: "/ceo-vshourlypressure",
    },
    {
      title: "Boiler Log Report",
      path: "/report-boilerlog",
    },
    {
      title: "Lab Hourly Report",
      path: "/report-labhourlyreport",
    },
    {
      title: "Lab Daily Report",
      path: "/report-labdailyreport",
    },
  ];

  productionengineerArr = [
    {
      title: this.translate.instant("REPORTS.attendancereport"),
      path: "/attendancereport",
    },
    {
      title: "Grading Report",
      path: "/report-gradingreport",
    },
    {
      title: this.translate.instant("REPORTS.sopcompliancereport"),
      path: "/report-sopcompliance",
    },
    {
      title: "Checklist Report",
      path: "/report-productionchecklist",
    },    
    {
      title: "Mill Performance Report",
      path: "/laboratoryreport",
    },
    {
      title: "Production Report",
      path: "/supervisor-productionreport",
    },
    {
      title: "Weighbridge Report",
      path: "/weighbridgereport",
    },
    {
      title: "Hourly Report",
      path: "/report-hourlyreporting",
    },    
    {
      title: "VS Information Cycle",
      path: "/ceo-vsinformationcycle",
    },
    {
      title: "VS Hourly Pressure",
      path: "/ceo-vshourlypressure",
    },
    {
      title: "Breakdown Report",
      path: "/report-breakdown",
    },
    {
      title: "Boiler Log Report",
      path: "/report-boilerlog",
    },
    {
      title: "Lab Hourly Report",
      path: "/report-labhourlyreport",
    },
    {
      title: "Lab Daily Report",
      path: "/report-labdailyreport",
    },   
  ];

  mandorArr = [
    {
      title: this.translate.instant("REPORTS.hourreporting"),
      path: "/report-hourlyreporting",
    },
    {
      title: "VS Information Cycle",
      path: "/ceo-vsinformationcycle",
    },
    {
      title: "VS Hourly Pressure",
      path: "/ceo-vshourlypressure",
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
