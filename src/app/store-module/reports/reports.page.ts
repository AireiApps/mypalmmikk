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
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));  
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;
  count = 0;
  brodacastcommcount=0; /*Broadcdast notification count*/
  personalizedcommcount=0; /*Personalized notification count*/

  itemsArr = [
    [
      {
        title: "Weekly Maintenance Report",
        path: "/weeklymaintenance-report",
        imgpath: "../../assets/img/weeklymaintenancereport.png",
      },
      {
        title: "ShutDown Maintenace Report",
        path: "/shutdownmaintenance-report",
        imgpath: "../../assets/img/shutdown.png",
      },
      {
        title: "Order/Req Item History",
        path: "/orderrequestitemhistory-report",
        imgpath: "../../assets/img/sorhistory.png",
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

  constructor(private notifi: AuthGuardService, private httpservice: HttpserviceService, private router: Router, private zone: NgZone, private service: AIREIService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getreportnotification();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();

    this.getreportnotification();
  }

  getreportnotification() 
  {
    let req = {
      userid: this.userlist.userId,
      desgin_id: this.userlist.desigId,
      usergroup_id: this.userlist.userGroupId,
      role_id: this.userlist.userRoleId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode
    }    

    this.service.getreportnotification(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {                 
        this.brodacastcommcount = resultdata.brodacastcommcount;
        this.personalizedcommcount = resultdata.personalizedcommcount;        
      }else{
        this.brodacastcommcount = 0;
        this.personalizedcommcount = 0;     
      }
    });
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
