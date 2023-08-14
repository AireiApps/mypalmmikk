import { Component, OnInit, NgZone } from '@angular/core';
import { appsettings } from 'src/app/appsettings';
import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';
import { AIREIService } from 'src/app/api/api.service';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';
import { Router } from '@angular/router';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
const { PushNotifications } = Plugins;

@Component({
  selector: 'app-storereports',
  templateUrl: './storereports.page.html',
  styleUrls: ['./storereports.page.scss'],
})
export class StorereportsPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  count = 0;
  //mill_name = appsettings.MILL_NAME

  mill_name = this.userlist.millname;

  itemsArr = [
    [
      {
        title: "Stock Take Report",
        path: "/stocktakereport",
        imgpath: "../../assets/img/stocktake.png",
      },
      {
        title: "Stock Issue On Location Report",
        path: "/stockissueonlocationreport",
        imgpath: "../../assets/img/stockbasedonlocation.png",
      },
      {
        title: "Stock Issue On Category Report",
        path: "/stockissueoncategoryreport",
        imgpath: "../../assets/img/stockbasedoncategory.png",
      },
      {
        title: "Stock Issue On Station Report",
        path: "/stockissueonstationreport",
        imgpath: "../../assets/img/storebasedonstation.png",
      },
      {
        title: "Broadcast Comm.",
        path: "/broadcastcommunicationreport",
        imgpath: "../../assets/img/broadcastlog.png",
      },
      {
        title: "Personalized Comm.",
        path: "/personlizecommunicationreport",
        imgpath: "../../assets/img/personlizedlog.png",
      }
    ]
  ];

  constructor(private notifi: AuthGuardService, private httpservice: HttpserviceService, private service: StoreServiceService, private router: Router, private zone: NgZone, private commonservice: AIREIService) { }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification(); 
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();  
  }


  updateNotification() {
    this.zone.run(() => {
      this.count = parseInt(localStorage.getItem("badge_count"));
    });
  }

  getLiveNotification() {
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        this.updateNotification();
      }
    );
  }

  btn_notification() {
    localStorage.setItem(
      "badge_count",
      "0"
    );
    this.router.navigate(["/notification"]);
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }

}
