import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { AIREIService } from "src/app/api/api.service";
import { ActivatedRoute } from "@angular/router";
import { ModalController } from "@ionic/angular";

import { OnehourentryPage } from "src/app/boiler-module/onehourentry/onehourentry.page";
import { TwohoursentryPage } from "src/app/boiler-module/twohoursentry/twohoursentry.page";
import { FourhoursentryPage } from "src/app/boiler-module/fourhoursentry/fourhoursentry.page";
import { TwelvehoursentryPage } from "src/app/boiler-module/twelvehoursentry/twelvehoursentry.page";

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-boiler-log-entry",
  templateUrl: "./boiler-log-entry.page.html",
  styleUrls: ["./boiler-log-entry.page.scss"],
})
export class BoilerLogEntryPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  itemsArr = [
    [
      {
        title: this.translate.instant("BOILERLOGENTRY.1hourlog"),
        name: "1 Hour Log",
        path: "/onehourentry",
        imgpath: "../../assets/img/boilerlogentry.png",
      },
      {
        title: this.translate.instant("BOILERLOGENTRY.2hourslog"),
        name: "2 Hours Log",
        path: "/twohoursentry",
        imgpath: "../../assets/img/boilerlogentry.png",
      },
    ],
    [
      {
        title: this.translate.instant("BOILERLOGENTRY.4hourslog"),
        name: "4 Hours Log",
        path: "/fourhoursentry",
        imgpath: "../../assets/img/boilerlogentry.png",
      },
      {
        title: this.translate.instant("BOILERLOGENTRY.12hourslog"),
        name: "12 Hours Log",
        path: "/twelvehoursentry",
        imgpath: "../../assets/img/boilerlogentry.png",
      },
    ],
    [
      {
        title: this.translate.instant("BOILERLOGENTRY.levels"),
        name: "Levels",
        path: "/boilerlevels",
        imgpath: "../../assets/img/boilerlevels.png",
      },
    ],
  ];

  constructor(
    private translate: TranslateService,
    public modalController: ModalController,
    private activeroute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private httpservice: HttpserviceService
  ) {}

  ngOnInit() {}

  btn_Action(item) {
    if ((item.name == "1 Hour Log") || (item.name == "2 Hours Log") || (item.name == "4 Hours Log") || (item.name == "12 Hours Log")) {
      this.callmodalcontroller(item.name);
    }else
    {
      this.router.navigate([item.path]);
    }   
  }

  getStatusColor(title) {
    let color;

    if (title == "1 Hour Log") {
      color = "#F7F7F7";
    }

    if (title == "2 Hours Log") {
      color = "#F7F7F7";
    }

    if (title == "4 Hours Log") {
      color = "#F7F7F7";
    }

    if (title == "12 Hours Log") {
      color = "#F7F7F7";
    }
    return color;
  }

  async callmodalcontroller(value) {
    if (value == "1 Hour Log") {
      const modal = await this.modalController.create({
        component: OnehourentryPage
      });

      return await modal.present();
    }

    if (value == "2 Hours Log") {
      const modal = await this.modalController.create({
        component: TwohoursentryPage,
      });

      return await modal.present();
    }

    if (value == "4 Hours Log") {
      const modal = await this.modalController.create({
        component: FourhoursentryPage,
      });

      return await modal.present();
    }

    if (value == "12 Hours Log") {
      const modal = await this.modalController.create({
        component: TwelvehoursentryPage,
      });

      return await modal.present();
    }
  }
}
