import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-shutdownmaintenance-list',
  templateUrl: './shutdownmaintenance-list.page.html',
  styleUrls: ['./shutdownmaintenance-list.page.scss'],
})
export class ShutdownmaintenanceListPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  shutdownmaintenancelist = []

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  constructor(private router: Router, private service: StoreServiceService, private commonservice: AIREIService, private httpservice: HttpserviceService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    this.httpservice.getContactLogin();

    this.getshutdownmaintenanceList();
  }

  ionViewDidEnter() {

    this.httpservice.getContactLogin();

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

  btn_AddShutDownMaintenance() {
    this.router.navigate(["/shutdownmaintenance-add"]);
  }

  btn_View(value) {    
    //this.commonservice.presentToast('Under Development');
    this.router.navigate(["/shutdownmaintenance-view", { item: JSON.stringify(value) }]);
  }

  btn_Edit(value) {
    //this.commonservice.presentToast('Under Development');
    this.router.navigate(["/shutdownmaintenance-edit", { item: JSON.stringify(value) }]);
  }

  btn_Action(value) {
    this.router.navigate(["/shutdownmaintenance-action", { item: JSON.stringify(value) }]);
    //console.log(value);
  }

}
