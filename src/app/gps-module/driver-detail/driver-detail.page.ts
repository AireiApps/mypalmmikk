import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DriverServiceService } from "src/app/services/driver-service/driver-service.service";
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.page.html',
  styleUrls: ['./driver-detail.page.scss'],
})
export class DriverDetailPage implements OnInit {

  driverdetailForm;
  detailValue;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  driverdetaillist = [];

  constructor(private platform: Platform, private router: Router, private service: DriverServiceService, private commonservice: AIREIService, private httpservice: HttpserviceService, private route: ActivatedRoute) {
    let detailform = this.route.snapshot.paramMap.get("item");
    this.detailValue = JSON.parse(detailform);
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();

    this.getDriverDetailList();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    
    this.getDriverDetailList();
  }

  getDriverDetailList() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      ffb_trans_id: this.detailValue.ffb_trans_id
    }

    this.service.getDriverDetailList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.driverdetaillist = resultdata.data
      }else{
        this.driverdetaillist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });
  }

  viewimage(value)
  {
    //console.log(value);
    this.router.navigate(["/zoomimage", { item: value}]);
  }
}
