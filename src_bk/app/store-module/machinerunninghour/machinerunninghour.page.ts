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
  selector: 'app-machinerunninghour',
  templateUrl: './machinerunninghour.page.html',
  styleUrls: ['./machinerunninghour.page.scss'],
})
export class MachinerunninghourPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  count = 0;
  //mill_name = appsettings.MILL_NAME

  mill_name = this.userlist.millname;

 machinerunninglist = [];

  constructor(private notifi: AuthGuardService, private httpservice: HttpserviceService, private service: StoreServiceService, private router: Router, private zone: NgZone, private commonservice: AIREIService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getMachineRunningHours();   
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.count = parseInt(localStorage.getItem("badge_count"));
    this.notifi.updateNotification();
    this.updateNotification();
    this.getMachineRunningHours();    
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

  getMachineRunningHours()
  {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode
    }

    this.service.getMachineRunningList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.machinerunninglist = resultdata.data
      }else{
        this.machinerunninglist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });
  }

  btn_reset(value)
  {
    this.resetMachineRunningHours(JSON.parse(value.id));
  }

  resetMachineRunningHours(getid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      id: getid
    }    

    this.service.resetMachineRunningHours(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {   

        this.commonservice.presentToast('Resetted Successfully...');

        this.httpservice.getContactLogin();
        this.count = parseInt(localStorage.getItem("badge_count"));
        this.notifi.updateNotification();
        this.updateNotification();
        this.getMachineRunningHours(); 

      }else
      {
        this.commonservice.presentToast('Resetted Failed...');
      }
    });
  }

  getStatusColor(runninghour, maxrunninghour) {
    let color;

    if (runninghour>=maxrunninghour) {
      color = "#FF0000";
    }else{
      color = "#777777";
    }
    return color;
  }

  getmaxColor() {
    let color;

    color = "#4B42F5";
   
    return color;
  }
}
