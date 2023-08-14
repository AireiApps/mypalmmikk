import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';
import { GradingServiceService } from 'src/app/services/grading-service/grading-service.service';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';

@Component({
  selector: 'app-overallhistory',
  templateUrl: './overallhistory.page.html',
  styleUrls: ['./overallhistory.page.scss'],
})
export class OverallhistoryPage implements OnInit {

  tabs_segment;

  historyForm;
  userlist = JSON.parse(localStorage.getItem("userlist"));
  historyOrders;
  today = new Date().toISOString()
  startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
  roleId;

  constructor(private fb: FormBuilder, private zone: NgZone, private notifi: AuthGuardService, private router: Router, private service: AIREIService, private securityservice: SecurityServiceService, private gradingservice: GradingServiceService) {
    this.roleId = this.userlist.userRoleId;

    this.historyForm = this.fb.group({
      fromdate: new FormControl(this.startOfMonth),
      todate: new FormControl(this.today),
      manualentry: new FormControl(false)
    });
    this.callAPI();
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.callAPI();
  }

  ionViewDidEnter() {
    this.callAPI();
  }

  btn_detailAction(value) {
    this.router.navigate(["/detail-trans", { item: JSON.stringify(value) }]);
  }

  btn_mapAction(value) {
    this.router.navigate(["/googlemap", { item: JSON.stringify(value),type:'history', roleid: this.roleId}]);
  }

  callAPI() {
    this.tabs_segment = "ffb"

    this.getSecurityHistory(this.tabs_segment)
  }

  getSecurityHistory(type) {

    var req = {
      millcode: this.userlist.millcode,
      fromdate: this.historyForm.value.fromdate,
      todate: this.historyForm.value.todate,
      acc_id: this.userlist.accId,
      type: Number(this.historyForm.value.manualentry)
    };

    this.securityservice.getSecurityHistory(req, type).then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.historyOrders = resultdata.data

      } else {
        this.historyOrders = []
        this.service.presentToast('No Record Found!')
      }
    });

  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.getSecurityHistory(ev.detail.value);
  }

}
