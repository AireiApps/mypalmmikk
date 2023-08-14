import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-laboratory-reporthome",
  templateUrl: "./laboratory-reporthome.page.html",
  styleUrls: ["./laboratory-reporthome.page.scss"],
})
export class LaboratoryReporthomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  count = 0;
  brodacastcommcount = 0; /*Broadcdast notification count*/
  personalizedcommcount = 0; /*Personalized notification count*/

  reportArr = [
    {
      title: "Hourly-Lab Report",
      path: "/laboratoryreport-hourly",
    },
    {
      title: "Daily-Lab Report",
      path: "/laboratory-generallabreport",
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
