import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { DriverServiceService } from "src/app/services/driver-service/driver-service.service";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { appsettings } from "src/app/appsettings";
import { AlertController } from "@ionic/angular";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
const { PushNotifications } = Plugins;
const { Geolocation } = Plugins;

@Component({
  selector: "app-drivermaps",
  templateUrl: "./drivermaps.page.html",
  styleUrls: ["./drivermaps.page.scss"],
})
export class DrivermapsPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  roleId = this.userlist.userRoleId;

  count = 0;
  driversArr = [];
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;
  
  pendingRouteArr = [];
  constructor(
    private router: Router,
    private zone: NgZone,
    private httpservice: HttpserviceService,
    public alertController: AlertController,
    private notifi: AuthGuardService,
    private service: DriverServiceService,
    private commonservice: AIREIService
  ) {}

  ngOnInit() {}

  getRecentMapsPending() {
    var req = {
      driverloginid: this.userlist.userId,
      millcode: this.userlist.millcode
    };

    this.service.getPendingDriversList(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.pendingRouteArr = resultdata.data;

        if (this.pendingRouteArr.length > 0) 
        {
          this.router.navigate(["/googlemap",{ item: JSON.stringify(this.pendingRouteArr[0]), type:'driver', additional:'driverhistory', roleid: this.roleId}]);
        }
      } else {
        this.pendingRouteArr=[];
        //  this.commonservice.presentToast('No Record Found!')
      }
    });
  }

  async confirmApproveVechicle(value) {
    const alert = await this.alertController.create({
      header: "Confirm!",
      message: "Vehicle No: " + value.vehicle_name,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (cancel) => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Okay",
          handler: () => {
            this.getNewCurrentPosition(value);
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }

  btn_RecentTrack() {
    if (this.pendingRouteArr.length > 0) {
      this.router.navigate([
        "/googlemap",
        { item: JSON.stringify(this.pendingRouteArr[0]), type:'driver', additional:'', roleid: this.roleId},
      ]);
    } else {
      this.commonservice.presentToast("No Recent Tracking!");
    }
  }

  async getNewCurrentPosition(value) {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log("Current", coordinates);
    this.btn_approveAction(value, coordinates);
    // const myLatlng = new google.maps.LatLng(
    //   coordinates.coords.latitude,
    //   coordinates.coords.longitude
    // );
    // this.lorrymarker = new google.maps.Marker({
    //   position: myLatlng,
    //   map: this.map,
    //   icon: this.icon_truck,
    // });

    // this.startNavigating(myLatlng);

    // this.service.createVechicleGEO(this.detailValue, coordinates.coords);
    // this.watchPosition();
  }

  updateNotification() {
    this.zone.run(() => {
      this.count = parseInt(localStorage.getItem("badge_count"));
    });
  }

  getLiveNotification() {
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        // alert('Push received: ' + JSON.stringify(notification));
        this.updateNotification();
      }
    );
  }

  btn_detailAction(value) {
    this.router.navigate(["/driver-detail", { item: JSON.stringify(value) }]);
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  ngAfterViewInit(): void {

    PushNotifications.removeAllDeliveredNotifications();

    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
    this.getRecentMapsPending();
    this.getMaps();
  }

  ionViewDidEnter() {

    PushNotifications.removeAllDeliveredNotifications();
    
    this.httpservice.getContactLogin();

    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getLiveNotification();
    this.getRecentMapsPending();
    this.getMaps();
  }

  ionViewDidLoad() {}

  getNotification() {
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        // alert('Push received: ' + JSON.stringify(notification));
        var count = parseInt(localStorage.getItem("badge_count"));
      }
    );
  }

  getMaps() {
    var req = {
      driverloginid: this.userlist.userId,
      millcode: this.userlist.millcode
    };

    this.service.getDriversPending(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.driversArr = resultdata.data;
      } else {
        this.driversArr = [];
        //this.commonservice.presentToast("No Record Found!");
      }
    });
  }

  getStatusColor(status) {
    let color;

    if (status == "pending") {
      color = "#0000FF";
    }

    if (status == "inprogress") {
      color = "#FFA500";
    }

    if (status == "completed") {
      color = "#008000";
    }
    return color;
  }

  btn_mapAction(value) {    
    this.router.navigate(["/googlemap", { item: JSON.stringify(value), type:'driver', additional:'', roleid: this.roleId}]);
  }

  btn_approveAction(value, coordinates) {
    var req = {
      ffb_trans_id: value.ffb_trans_id,
      millcode: this.userlist.millcode,
      driverid: value.driverId,
      status: 1,
      lat: coordinates.coords.latitude,
      lang: coordinates.coords.longitude,
    };

    this.service.approveService(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast("Driver Started");
        this.btn_mapAction(value);
      } else {
        this.commonservice.presentToast("No Record Found!");
      }
    });
  }
}
