import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-orderrequestitemhistory-report',
  templateUrl: './orderrequestitemhistory-report.page.html',
  styleUrls: ['./orderrequestitemhistory-report.page.scss'],
})
export class OrderrequestitemhistoryReportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  recentStore = [];

  constructor(private httpservice: HttpserviceService,private service: StoreServiceService, private router: Router, private commonservice: AIREIService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.getMaintanceOrder();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.getMaintanceOrder();
  }


  getMaintanceOrder() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode
    }

    //console.log(req);

    this.service.getRecentMaintanceList(req).then(result => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentStore = resultdata.data
      }else
      {
        this.recentStore = [];
      }
    });
  }

  btn_detailAction(value) {
    this.router.navigate(["/maintenance-order-details", { item: JSON.stringify(value) }]);
  }

}
