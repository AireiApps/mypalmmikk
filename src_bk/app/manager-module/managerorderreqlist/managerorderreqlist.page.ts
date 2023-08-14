import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { ManagerServiceService } from 'src/app/services/manager-service/manager-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-managerorderreqlist',
  templateUrl: './managerorderreqlist.page.html',
  styleUrls: ['./managerorderreqlist.page.scss'],
})
export class ManagerorderreqlistPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  recentStore = [];

  constructor(private httpservice: HttpserviceService,private service: ManagerServiceService, private router: Router, private commonservice: AIREIService, public alertController: AlertController) { }

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
      millcode: this.userlist.millcode,
      department_id: this.userlist.dept_id
    }

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

  btn_OrderRequest() {
    this.router.navigate(["/managerorderreq-add"]);
  }

  btn_detailAction(value) {
    this.router.navigate(["/managerorderreq-detail", { item: JSON.stringify(value) }]);
  }

  async confirmReceived(value) {
    const alert = await this.alertController.create({
      header: 'Request Confirmation',
      message: 'Do you received all item(s) as you requested?',
      buttons: [
        {
          text: 'No',          
          cssClass: 'secondary',
          handler: (cancel) => {            
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.btn_delete(value);
          }
        }
      ]
    });

    await alert.present();
  }

  btn_delete(value) {
    for(let i = 0; i < this.recentStore.length; i++) {

      if(this.recentStore[i] == value){
        this.recentStore.splice(i, 1);
        this.deleteSOR(JSON.parse(value.sor_id));
      }
    }
  }

  deleteSOR(sorid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      sor_id: sorid
    }

    console.log(req);

    this.service.deleteSOR(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {                
        this.commonservice.presentToast('Items Received Successfully...');
      }
    });
  }

}
