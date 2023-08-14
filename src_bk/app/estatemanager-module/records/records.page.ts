import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';
import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';
import { EstatemanagerServiceService } from 'src/app/services/estatemanager-service/estatemanager-service.service';
const { PushNotifications } = Plugins;

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit {

  total_net_weight='';
  firstrecordForm;
  secondrecordForm;
  userlist = JSON.parse(localStorage.getItem("userlist"));
  firstrecordsList = [];
  secondrecordsList = [];
  today = new Date().toISOString()
  startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
  year = moment().startOf('month').format('YYYY');
  count = 0;

  constructor(private httpservice: HttpserviceService, private fb: FormBuilder, private zone: NgZone, private notifi: AuthGuardService, private router: Router, private service: AIREIService, private emservice: EstatemanagerServiceService) {          
    this.firstrecordForm = this.fb.group({
      txtmonth: new FormControl("", Validators.required),       
      select_mill: new FormControl('')
    });

    this.secondrecordForm = this.fb.group({
      fromdate: new FormControl(this.startOfMonth),
      todate: new FormControl(this.today)       
    });
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    
    this.httpservice.getContactLogin();

    this.datewiseapi();
  }

  ionViewDidEnter() {
    
    this.httpservice.getContactLogin();

    this.datewiseapi();
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

  btn_notification() {
    localStorage.setItem(
      "badge_count",
      "0"
    );
    this.router.navigate(["/notification"]);
  }

  monthwiseapi()
  {
    if (this.firstrecordForm.valid) {
      this.getFFBHistoryMonthwise();
    }else{
      this.service.presentToast('Month is Mandatory')
    }
  }

  datewiseapi()
  {
    
    this.firstrecordForm.value.txtmonth='';
    
    this.getFFBHistoryDatewise();
  }

  getFFBHistoryMonthwise() {
    var req = {
      month: moment(this.firstrecordForm.value.txtmonth).format("MM"),
      year: this.year,
      acc_id: this.userlist.accId,
      userid: this.userlist.userId,
      millcode: this.userlist.millcode
    };

    this.service.getHistory(req, '').then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {                
        this.firstrecordsList = resultdata.data;
        this.total_net_weight = resultdata.total_net_weight;
      } else {
        this.firstrecordsList = [];
        this.total_net_weight = '0';
        //this.service.presentToast('No Record Found!')
      }
    });
  }

  getFFBHistoryDatewise() {
    var req = {
      fromdate: this.secondrecordForm.value.fromdate,
      todate: this.secondrecordForm.value.todate,
      acc_id: this.userlist.accId,
      userid: this.userlist.userId,
      millcode: this.userlist.millcode
    };

    console.log(req);

    this.service.getHistory(req, '').then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {        
        this.secondrecordsList = resultdata.data;
        //this.total_net_weight = resultdata.total_net_weight;
      } else {
        this.secondrecordsList = [];
        this.service.presentToast('No Record Found!');
      }
    });
  }

  btn_detailAction(value) {
    this.router.navigate(["/detail-trans", { item: JSON.stringify(value) }]);
  }

}
