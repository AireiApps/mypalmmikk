import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl} from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { ManagerServiceService } from 'src/app/services/manager-service/manager-service.service';
import { Router } from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-managermaintenancereport',
  templateUrl: './managermaintenancereport.page.html',
  styleUrls: ['./managermaintenancereport.page.scss'],
})
export class ManagermaintenancereportPage implements OnInit {

  maintenancereportForm;

  maintenancereportlist=[];

  userlist = JSON.parse(localStorage.getItem("userlist"));
  currentdate = new Date().toISOString();

  getDate;
  overallcomments='';
  engineercomments='';
  managercomments='';

  constructor(private router: Router, private commonservice: AIREIService, private fb: FormBuilder, private service: ManagerServiceService) {
    this.maintenancereportForm = this.fb.group({
      pickdate: new FormControl(this.currentdate)  
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
    this.getMaintenanceReport();
  }

  getMaintenanceReport() {

    this.getDate = moment(this.maintenancereportForm.value.pickdate).format("YYYY-MM-DD");

    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.getDate
    }

    this.service.getMaintenanceReportDetails(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.maintenancereportlist = resultdata.data
        
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
        this.maintenancereportlist = [];
        /*this.overallcomments='';
        this.engineercomments='';
        this.managercomments='';*/
        this.commonservice.presentToast('No Record Found!')
      }
    });

  }

  btn_save()
  {
    this.saveEngineerMaintenanceReport();
  }

  saveEngineerMaintenanceReport()
  {
    this.getDate = moment(this.maintenancereportForm.value.pickdate).format("YYYY-MM-DD");

    const req = {
      user_id: this.userlist.userId,
      role_id: this.userlist.userRoleId,
      millcode: this.userlist.millcode,
      date: this.getDate,
      overall_comments: this.maintenancereportForm.value.tacomments
    };

    console.log(req);

    this.service.saveEngineerMaintenanceComments(req).then(result => {
      var resultdata: any;
      resultdata = result;      

      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast('Saved Successfully!');

        this.router.navigate(["/engineerhome"]);

      } else {
        this.commonservice.presentToast('Saved Failed!');
      }
    });
  }

  btn_comments(value)
  {
    this.router.navigate(["/managermaintenancecomments", { item: JSON.stringify(value) }]);
  }


}
