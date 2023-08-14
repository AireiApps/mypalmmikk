import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { AIREIService } from 'src/app/api/api.service';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
const { PushNotifications } = Plugins;

import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';

@Component({
  selector: 'app-securitycommunication',
  templateUrl: './securitycommunication.page.html',
  styleUrls: ['./securitycommunication.page.scss'],
})
export class SecuritycommunicationPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  count = 0;
  brodacastcommcount=0; /*Broadcdast notification count*/
  personalizedcommcount=0; /*Personalized notification count*/

  itemsArr = [
    [     
      {
        title: "Broadcast",
        path: "/security-broadcastchat",
        imgpath: "../../assets/img/broadcastlog.png",
      },
      {
        title: "Personalized",
        path: "/security-personalizedchatdepartment",
        imgpath: "../../assets/img/personlizedlog.png",
      }
    ]
  ];

  constructor(private zone: NgZone, private httpservice: HttpserviceService, private router: Router, private notifi: AuthGuardService, private service: AIREIService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {    
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();

    this.getreportnotification();
  }

  ionViewDidEnter() {    
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification()
    this.updateNotification();
    this.getLiveNotification();

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
  
  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  updateNotification() {
    this.zone.run(() => {
      this.count = parseInt(localStorage.getItem("badge_count"));
    });
  }

  getLiveNotification() {
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        // alert('Push received: ' + JSON.stringify(notification));
        this.updateNotification();
      }
    );
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }

}
