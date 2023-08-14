import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { BoilerServiceService } from 'src/app/services/boiler-service/boiler-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-orderreqlist',
  templateUrl: './orderreqlist.page.html',
  styleUrls: ['./orderreqlist.page.scss'],
})
export class OrderreqlistPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  recentStore = [];

  enableflag = false;

  constructor(private httpservice: HttpserviceService,private service: BoilerServiceService, private router: Router, private commonservice: AIREIService, public alertController: AlertController) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {    
    this.getMaintanceOrder();
  }

  ionViewDidEnter() {
    this.commonservice.presentLoading();
    this.getMaintanceOrder();
  }

  getMaintanceOrder() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      department_id: this.userlist.dept_id
    }

    console.log(req);

    this.service.getRecentMaintanceList(req).then(result => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentStore = resultdata.data;

        this.enableflag = false;
      }else
      {
        this.recentStore = [];

        this.enableflag = true;
      }
    });
  }

  btn_OrderRequest() {
    this.router.navigate(["/orderreq-add"]);
  }

  btn_detailAction(value) {
    this.router.navigate(["/orderreq-detail", { item: JSON.stringify(value) }]);
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

      if(this.recentStore[i] == value)
      {
        this.recentStore.splice(i, 1);        
        
        this.deleteSOR(JSON.parse(value.sor_id));
      }
    }
  }

  deleteSOR(sorid) 
  {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      sor_id: sorid
    }

    //console.log(req);

    this.service.deleteSOR(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {                
        this.commonservice.presentToast('Items Received Successfully...');
      }
    });
  }

}
