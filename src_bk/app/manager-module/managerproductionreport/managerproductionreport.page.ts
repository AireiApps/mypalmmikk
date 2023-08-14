import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl} from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { ManagerServiceService } from 'src/app/services/manager-service/manager-service.service';
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import * as moment from 'moment';

@Component({
  selector: 'app-managerproductionreport',
  templateUrl: './managerproductionreport.page.html',
  styleUrls: ['./managerproductionreport.page.scss'],
})
export class ManagerproductionreportPage implements OnInit {

  productionreportForm;

  productionreportlist=[];

  userlist = JSON.parse(localStorage.getItem("userlist"));
  currentdate = new Date().toISOString();

  getDate;
  overallcomments='';
  engineercomments='';
  managercomments='';

  constructor(private router: Router, private commonservice: AIREIService, private fb: FormBuilder, private service: ManagerServiceService, private alertcontroller:AlertController) {
    this.productionreportForm = this.fb.group({
      pickdate: new FormControl(this.currentdate),
      taoverallcomments: new FormControl(''),
      taengineercomments: new FormControl(''),
      tamanagercomments: new FormControl(''),
      tacomments: new FormControl(''),    
    });
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.callAPI();
  }

  ionViewDidEnter() {
    this.callAPI();    
  }
  
  callAPI()
  {
    this.getProductionReport();
  }

  getProductionReport() {

    this.getDate = moment(this.productionreportForm.value.pickdate).format("YYYY-MM-DD");

    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.getDate
    }

    this.service.getProductionReportDetails(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.productionreportlist = resultdata.data
        
        /*if(resultdata.comments.OverallComments=='')
        {
          this.overallcomments = 'No Comments';
        }else
        {
          this.overallcomments = resultdata.comments.OverallComments;        
        }

        if(resultdata.comments.OverallEngineerComments=='')
        {
          this.engineercomments = 'No Comments';
        }else
        {
          this.engineercomments = resultdata.comments.OverallEngineerComments;       
        }

        if(resultdata.comments.OverallManagerComments=='')
        {
          this.managercomments = 'No Comments';
        }else
        {
          this.managercomments = resultdata.comments.OverallManagerComments;       
        }*/
      }else{
        this.productionreportlist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });

  }

  btn_save()
  {
    this.saveEngineerProductionReport();
  }

  saveEngineerProductionReport()
  {
    this.getDate = moment(this.productionreportForm.value.pickdate).format("YYYY-MM-DD");

    const req = {
      user_id: this.userlist.userId,
      role_id: this.userlist.userRoleId,
      millcode: this.userlist.millcode,
      date: this.getDate,
      overall_comments: this.productionreportForm.value.tacomments
    };

    console.log(req);

    this.service.saveEngineerProductionComments(req).then(result => {
      var resultdata: any;
      resultdata = result;      

      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast('Saved Successfully!');

        this.router.navigate(['/tabs/tabhome']);      

      } else {
        this.commonservice.presentToast('Saved Failed!');
      }
    });
  }

  btn_comments(value)
  {
    this.router.navigate(["/managerproductioncomments", { item: JSON.stringify(value) }]);
  }

}
