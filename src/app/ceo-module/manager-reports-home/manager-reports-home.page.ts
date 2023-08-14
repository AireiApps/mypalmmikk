import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-manager-reports-home',
  templateUrl: './manager-reports-home.page.html',
  styleUrls: ['./manager-reports-home.page.scss'],
})
export class ManagerReportsHomePage implements OnInit {

  reportArr = [
    {
      title: "Mill Performance Report",
      path: "/report-millperformancereport",
    },
    {
      title: "Boiler Log Report",
      path: "/report-boilerlogreport",
    },
    {
      title: "Weighbridge Report",
      path: "/weighbridgereport",
    },
    {
      title: "Breakdown Report",
      path: "/report-breakdown",
    },
    {
      title: "Breakdown List",
      path: "/report-maintenance-breakdownlist",
    },
  ];

  constructor( private router: Router) { }

  ngOnInit() {
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }

}
