import { Component, OnInit, NgZone } from '@angular/core';
import { appsettings } from 'src/app/appsettings';
import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { BoilerServiceService } from 'src/app/services/boiler-service/boiler-service.service';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
const { PushNotifications } = Plugins;

@Component({
  selector: 'app-home-supplier',
  templateUrl: './home-supplier.page.html',
  styleUrls: ['./home-supplier.page.scss'],
})
export class HomeSupplierPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  count = 0;
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;
  recentSuppliers;
  constructor(private notifi: AuthGuardService, private httpservice: HttpserviceService, private router: Router, private zone: NgZone, private service: BoilerServiceService) { }

  ngOnInit() {
  }

  btn_detailAction(value) {
    this.router.navigate(["/supplier-update", { item: JSON.stringify(value) }]);
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();
    this.getRecentSuppliers()
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();
    this.getRecentSuppliers();
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


  getRecentSuppliers() {
    let req = {
      "acc_id": this.userlist.accId,
      "millcode": this.userlist.millcode
    };

    this.service.recentsupplierlist(req).then(result => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentSuppliers = resultdata.data;
      }
    });
  }


  btn_notification() {
    localStorage.setItem(
      "badge_count",
      "0"
    );
    this.router.navigate(["/notification"]);
  }

}
