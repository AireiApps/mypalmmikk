import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-hourly-reports-home",
  templateUrl: "./hourly-reports-home.page.html",
  styleUrls: ["./hourly-reports-home.page.scss"],
})
export class HourlyReportsHomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  reportArr = [
    {
      title: "Lab",
      name: "Hourly-Lab Report",
      path: "/ceo-hourlylabreport",
      imgpath: "../../assets/img/labhourlyreport.png",
    },
    {
      title: "Production",
      name: "Production Hourly Report",
      path: "/ceo-hourlyreport",
      imgpath: "../../assets/img/hourlyreport.png",
    },
    {
      title: "Boiler",
      name: "Boiler Log Report",
      path: "/ceo-boilerlogreport",
      imgpath: "../../assets/img/boilerreport.png",
    },
    {
      title: "VS Information Cycle",
      name: "VS Information Cycle",
      path: "/ceo-vsinformationcycle",
      imgpath: "../../assets/img/verticalsterilizer.png",
    },
    {
      title: "VS Hourly Pressure",
      name: "VS Hourly Pressure",
      path: "/ceo-vshourlypressure",
      imgpath: "../../assets/img/verticalsterilizer.png",
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
