import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: "app-ceo-dailyreports",
  templateUrl: "./ceo-dailyreports.page.html",
  styleUrls: ["./ceo-dailyreports.page.scss"],
})
export class CeoDailyreportsPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  itemsArr = [
    [
      {
        title: "Grading Reports",
        name: "Grading Reports",
        path: "/ceo-gradingreports-home",
        imgpath: "../../assets/img/gradingreporthome.png",
      },
      {
        title: "Financial Reports",
        name: "Financial Reports",
        path: "/ceo-financialreports-home",
        imgpath: "../../assets/img/profitandloss.png",
      },
      {
        title: "Production Reports",
        name: "Production Reports",
        path: "/ceo-productionreports-home",
        imgpath: "../../assets/img/productionreporthome.png",
      },
      {
        title: "Store Reports",
        name: "Store Reports",
        path: "/ceo-storereports-home",
        imgpath: "../../assets/img/storereporthome.png",
      },
      {
        title: "Maintenance Reports",
        name: "Maintenance Reports",
        path: "/ceo-maintenancereports-home",
        imgpath: "../../assets/img/maintenancereporthome.png",
      },
    ],
  ];

  visitingconsultantArr = [
    [
      {
        title: "Daily P&L Report",
        name: "Daily P&L Report",
        path: "/dailypl",
        imgpath: "../../assets/img/profitandloss.png",
      },
      {
        title: "FFB Creditors Statement",
        name: "FFB Creditors Statement",
        path: "/ffbcreditorsreport",
        imgpath: "../../assets/img/ffbcreditorsreport.png",
      },
      {
        title: "Debtors",
        name: "Debtors",
        path: "/ffbdebitorreport",
        imgpath: "../../assets/img/ffbdebitorreport.png",
      },
      {
        title: "Cash Flow",
        name: "Cash Flow",
        path: "/cashflowreport",
        imgpath: "../../assets/img/cashflowreport.png",
      },
      {
        title: "Cash Flow Statement",
        name: "Cash Flow Statement",
        path: "/cashflowstatementreport",
        imgpath: "../../assets/img/cashflowstatementreport.png",
      },
      {
        title: "Production Report",
        name: "Production Report",
        path: "/productionreport",
        imgpath: "../../assets/img/productionreport.png",
      },
      {
        title: "Store Issue Report",
        name: "Store Issue Report",
        path: "/issuereport",
        imgpath: "../../assets/img/issuereport.png",
      },
      {
        title: "Store Purchase Report",
        name: "Store Purchase Report",
        path: "/purchasereport",
        imgpath: "../../assets/img/purchasereport.png",
      },
      {
        title: "Mill Performance Report",
        name: "Mill Performance Report",
        path: "/ceo-millperformancereport",
        imgpath: "../../assets/img/boilerlog.png",
      },
      {
        title: "SOP Compliance Report",
        name: "SOP Compliance Report",
        path: "/compliancereport",
        imgpath: "../../assets/img/sustainchecklist.png",
      },
      {
        title: "Breakdown List",
        name: "Breakdown List",
        path: "/ceo-breakdownlist",
        imgpath: "../../assets/img/ceomaintenancereport.png",
      },
      {
        title: "Breakdown Report",
        name: "Breakdown Report",
        path: "/ceo-breakdown",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: "Lab Daily Report",
        name: "Daily-Lab Report",
        path: "/ceo-dailylabreport",
        imgpath: "../../assets/img/labdailyreport.png",
      },
      {
        title: "Scheduling Report",
        name: "Scheduling Report",
        path: "/ceo-schedulingreport",
        imgpath: "../../assets/img/productiontimeline.png",
      },
      {
        title: "Engineers Checklist Report",
        name: "Engineers Checklist Report",
        path: "/ceo-productionandmaintenancechecklistreport",
        imgpath: "../../assets/img/supervisorreport.png",
      },
      {
        title: "Running Hours Report",
        name: "Running Hours Report",
        path: "/ceo-machinerunninghoursreport",
        imgpath: "../../assets/img/machinerunninghours.png",
      },
      {
        title: "User Activity Report",
        name: "User Activity Report",
        path: "/ceo-useractivity-home",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      {
        title: "Grading Report",
        name: "Grading Report",
        path: "/ceo-gradingreport",
        imgpath: "../../assets/img/gradingreport.png",
      },
      {
        title: "Weightbridge Report",
        name: "Weightbridge Report",
        path: "/ceo-weighbridgereport",
        imgpath: "../../assets/img/weighbridge.png",
      },
      {
        title: "User Log Report",
        name: "User Log Report",
        path: "/ceo-userlogreport",
        imgpath: "../../assets/img/userlog.png",
      },
    ],
  ];

  managerArr = [
    [
      {
        title: "Daily P&L Report",
        name: "Daily P&L Report",
        path: "/dailypl",
        imgpath: "../../assets/img/profitandloss.png",
      },
      {
        title: "FFB Creditors Statement",
        name: "FFB Creditors Statement",
        path: "/ffbcreditorsreport",
        imgpath: "../../assets/img/ffbcreditorsreport.png",
      },
      {
        title: "Debtors",
        name: "Debtors",
        path: "/ffbdebitorreport",
        imgpath: "../../assets/img/ffbdebitorreport.png",
      },
      {
        title: "Cash Flow",
        name: "Cash Flow",
        path: "/cashflowreport",
        imgpath: "../../assets/img/cashflowreport.png",
      },
      {
        title: "Cash Flow Statement",
        name: "Cash Flow Statement",
        path: "/cashflowstatementreport",
        imgpath: "../../assets/img/cashflowstatementreport.png",
      },
      {
        title: "Production Report",
        name: "Production Report",
        path: "/productionreport",
        imgpath: "../../assets/img/productionreport.png",
      },
      {
        title: "Store Issue Report",
        name: "Store Issue Report",
        path: "/issuereport",
        imgpath: "../../assets/img/issuereport.png",
      },
      {
        title: "Store Purchase Report",
        name: "Store Purchase Report",
        path: "/purchasereport",
        imgpath: "../../assets/img/purchasereport.png",
      },
      {
        title: "Mill Performance Report",
        name: "Mill Performance Report",
        path: "/ceo-millperformancereport",
        imgpath: "../../assets/img/boilerlog.png",
      },
      {
        title: "SOP Compliance Report",
        name: "SOP Compliance Report",
        path: "/compliancereport",
        imgpath: "../../assets/img/sustainchecklist.png",
      },
      {
        title: "Breakdown List",
        name: "Breakdown List",
        path: "/ceo-breakdownlist",
        imgpath: "../../assets/img/ceomaintenancereport.png",
      },
      {
        title: "Breakdown Report",
        name: "Breakdown Report",
        path: "/ceo-breakdown",
        imgpath: "../../assets/img/breakdownreport.png",
      },
      {
        title: "Lab Daily Report",
        name: "Daily-Lab Report",
        path: "/ceo-dailylabreport",
        imgpath: "../../assets/img/labdailyreport.png",
      },
      {
        title: "Scheduling Report",
        name: "Scheduling Report",
        path: "/ceo-schedulingreport",
        imgpath: "../../assets/img/productiontimeline.png",
      },
      {
        title: "Engineers Checklist Report",
        name: "Engineers Checklist Report",
        path: "/ceo-productionandmaintenancechecklistreport",
        imgpath: "../../assets/img/supervisorreport.png",
      },
      {
        title: "Running Hours Report",
        name: "Running Hours Report",
        path: "/ceo-machinerunninghoursreport",
        imgpath: "../../assets/img/machinerunninghours.png",
      },
      {
        title: "User Activity Report",
        name: "User Activity Report",
        path: "/ceo-useractivity-home",
        imgpath: "../../assets/img/preventivemaintenance.png",
      },
      {
        title: "Grading Report",
        name: "Grading Report",
        path: "/ceo-gradingreport",
        imgpath: "../../assets/img/gradingreport.png",
      },
      {
        title: "Weightbridge Report",
        name: "Weightbridge Report",
        path: "/ceo-weighbridgereport",
        imgpath: "../../assets/img/weighbridge.png",
      },
      {
        title: "User Log Report",
        name: "User Log Report",
        path: "/ceo-userlogreport",
        imgpath: "../../assets/img/userlog.png",
      },
    ],
  ];

  constructor(
    private router: Router,
    private zone: NgZone,
    private commonservice: AIREIService
  ) {}

  ngOnInit() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
