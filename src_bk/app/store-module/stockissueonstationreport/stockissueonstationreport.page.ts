import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { appsettings } from 'src/app/appsettings';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';

@Component({
  selector: 'app-stockissueonstationreport',
  templateUrl: './stockissueonstationreport.page.html',
  styleUrls: ['./stockissueonstationreport.page.scss'],
})
export class StockissueonstationreportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;  
  //mill_name = appsettings.MILL_NAME

  mill_name = this.userlist.millname;
  
  weburl;

  constructor(private router: Router, private httpservice: HttpserviceService, private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getUrl(); 
  }

  ionViewWillEnter()
  {
    this.getUrl(); 
  }

  getUrl()
  {

    let formatedurl = "http://103.27.72.29/mms.airei.com.my1/index.php/Monthly_reports/Stock_issue_report_station?mobile=1&user_id=" + this.user_id;

    this.weburl = formatedurl; 
  }
}
