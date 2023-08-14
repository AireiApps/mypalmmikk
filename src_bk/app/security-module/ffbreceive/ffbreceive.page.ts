import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AIREIService } from 'src/app/api/api.service';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';

@Component({
  selector: 'app-ffbreceive',
  templateUrl: './ffbreceive.page.html',
  styleUrls: ['./ffbreceive.page.scss'],
})
export class FfbreceivePage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  ffbOrders;
  ffbOrdersLength=0;

  enableflag = false;

  constructor(private router: Router, private httpservice: HttpserviceService, private service: SecurityServiceService, private commonservice: AIREIService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getffbList();
  }

  ionViewDidEnter() {

    this.commonservice.presentLoading();

    this.getffbList();
  }

  getffbList() {        
    var req = {
      user_id: this.userlist.userId,
      desgin_id: this.userlist.desigId,
      usergroup_id: this.userlist.userGroupId,
      acc_id: this.userlist.accId,
      role_id: this.userlist.userRoleId,
      dept_id: this.userlist.dept_id,
      millcode: this.userlist.millcode
    };

    this.service.getSecurityFFB(req).then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {

        this.ffbOrders = [];

        this.ffbOrders = resultdata.data;

        this.ffbOrdersLength = this.ffbOrders.length;

        //this.commonservice.presentToast(this.ffbOrdersLength);

        this.enableflag = false;

      } else {
        
        this.ffbOrders = [];

        this.ffbOrdersLength = 0;

        //this.commonservice.presentToast(this.ffbOrdersLength);

        //this.commonservice.presentToast('No Record Found!');

        this.enableflag = true;
      }
    });
  }

  btn_ffbAction(value) {
    this.router.navigate(["/ffbform", { item: JSON.stringify(value) }]);
  }

  btn_manualreceiveffb() {
    this.router.navigate(["/manualffbform"]);
  }

}
