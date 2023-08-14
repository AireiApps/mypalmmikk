import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { appsettings } from 'src/app/appsettings';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';

@Component({
  selector: 'app-securitycommunication-show',
  templateUrl: './securitycommunication-show.page.html',
  styleUrls: ['./securitycommunication-show.page.scss'],
})
export class SecuritycommunicationShowPage implements OnInit {

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

    let formatedurl = "http://103.27.72.29/mms.airei.com.my1/index.php/Reports/MMS_logsheet_mobile?user_id=" + this.user_id;

    this.weburl = formatedurl; 
  }

}
