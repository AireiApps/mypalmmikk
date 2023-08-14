import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shutdownmaintenance-report',
  templateUrl: './shutdownmaintenance-report.page.html',
  styleUrls: ['./shutdownmaintenance-report.page.scss'],
})
export class ShutdownmaintenanceReportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  shutdownmaintenancelist = []

  constructor(private router: Router, private service: StoreServiceService, private commonservice: AIREIService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getshutdownmaintenanceList();
  }

  ionViewDidEnter() {
    this.getshutdownmaintenanceList();
  }

  getshutdownmaintenanceList() {
    let req = {
      requester_id: this.userlist.userId,
      millcode: this.userlist.millcode
    }

    this.service.getShutdownMaintenanceList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.shutdownmaintenancelist = resultdata.data
      }else{
        this.shutdownmaintenancelist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });
  }

  btn_View(value) {    
    //this.commonservice.presentToast('Under Development');
    this.router.navigate(["/shutdownmaintenance-view", { item: JSON.stringify(value) }]);
  }
}
