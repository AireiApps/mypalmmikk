import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weeklymaintenance-report',
  templateUrl: './weeklymaintenance-report.page.html',
  styleUrls: ['./weeklymaintenance-report.page.scss'],
})
export class WeeklymaintenanceReportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  weeklymaintenancelist = [];

  constructor(private router: Router, private service: StoreServiceService, private commonservice: AIREIService, private httpservice: HttpserviceService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();

    this.getWeeklyMaintenanceList();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    
    this.getWeeklyMaintenanceList();
  }

  getWeeklyMaintenanceList() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode
    }

    this.service.getWeeklyMaintanceList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.weeklymaintenancelist = resultdata.data
      }else{
        this.weeklymaintenancelist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });
  }

  btn_View(value) {
    this.router.navigate(["/weekly-maintenance-view", { item: JSON.stringify(value) }]);
    //console.log(value);
  }

}
