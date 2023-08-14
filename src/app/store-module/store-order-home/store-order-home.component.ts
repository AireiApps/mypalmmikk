import { Component, OnInit, NgZone } from '@angular/core';
import { appsettings } from 'src/app/appsettings';
import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';

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
  selector: 'app-store-order-home',
  templateUrl: './store-order-home.component.html',
  styleUrls: ['./store-order-home.component.scss'],
})
export class StoreOrderHomeComponent implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  count = 0;
  //mill_name = appsettings.MILL_NAME

  mill_name = this.userlist.millname;
  
  recentStore = [];
  department;
  constructor(private notifi: AuthGuardService, private httpservice: HttpserviceService, private service: StoreServiceService, private router: Router, private zone: NgZone) {
  }

  ngOnInit() { }


  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();

    this.department = this.userlist.department
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();
    if (this.department == 'Store') {
      this.getStoreOrder()

    }
    if (this.department == 'Maintenance') {
      this.getMaintanceOrder()
    }
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();

    this.department = this.userlist.department
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();
    if (this.department == 'Store') {
      this.getStoreOrder()

    }
    if (this.department == 'Maintenance') {
      this.getMaintanceOrder()
    }
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

  btn_OrderRequest() {
    this.router.navigate(["/storeorder"]);
  }

  btn_notification() {
    localStorage.setItem(
      "badge_count",
      "0"
    );
    this.router.navigate(["/notification"]);
  }


  getStoreOrder() {
    let req = {
      millcode: this.userlist.millcode
    }

    this.service.getRecentStoreList(req).then(result => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentStore = resultdata.data
      }
    });
  }

  getMaintanceOrder() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode
    }

    this.service.getRecentMaintanceList(req).then(result => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentStore = resultdata.data
      }
    });
  }

  btn_detailAction(value) {
    this.router.navigate(["/store-order-detail", { item: JSON.stringify(value) }]);
  }

  btn_quoteapproval()
  {
    this.router.navigate(["/storestatusupdate"]);
  }

}
