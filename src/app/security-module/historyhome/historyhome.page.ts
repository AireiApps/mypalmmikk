import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';
import { GradingServiceService } from 'src/app/services/grading-service/grading-service.service';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';

@Component({
  selector: 'app-historyhome',
  templateUrl: './historyhome.page.html',
  styleUrls: ['./historyhome.page.scss'],
})
export class HistoryhomePage implements OnInit {

  logbookForm;
  logbookList;


  userlist = JSON.parse(localStorage.getItem("userlist"));
  today = new Date().toISOString()
  startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
  count = 0;

  constructor(private httpservice: HttpserviceService, private fb: FormBuilder, private zone: NgZone, private notifi: AuthGuardService, private router: Router, private commonservice: AIREIService, private securityservice: SecurityServiceService) {
    this.logbookForm = this.fb.group({
      fromdate: new FormControl(this.startOfMonth),
      todate: new FormControl(this.today),
      manualentry: new FormControl(false)
    });    
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.callAPI();
  }

  ionViewDidEnter() { 
    this.httpservice.getContactLogin();
    this.callAPI();
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }

  callAPI() {
    this.getSecurityHistory();
  }

  getSecurityHistory()
  {
    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.logbookForm.value.fromdate,
      todate: this.logbookForm.value.todate,
      acc_id: this.userlist.accId,
      dept_id: this.userlist.dept_id
    };

    this.securityservice.getLogbook(req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {        
        this.logbookList = resultdata.data;
        console.log(this.logbookList);
      } else {
        this.logbookList=[];    
        this.commonservice.presentToast('No Record Found!');    
      }
    });
  }

  getStatusColor(type) {
    let color;

    if (type == 'OTHER') 
    {
      color = "#99ddff";
    }

    if (type == 'FFB') 
    {
      color = '#ffffb3';
    }

    if (type == 'REPORT') 
    {
      color = '#bbff99';
    }

    if (type == 'SHIFT') 
    {
      color = '#ffccf2';
    }
    return color;
  }

  viewimage(value)
  {
    //console.log(value);
    this.router.navigate(["/zoomimage", { item: value}]);
  }

}
