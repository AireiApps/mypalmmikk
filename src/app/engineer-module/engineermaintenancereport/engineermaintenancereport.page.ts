import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl} from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { EngineerServiceService } from 'src/app/services/engineer-service/engineer-service.service';
import { Router } from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: 'app-engineermaintenancereport',
  templateUrl: './engineermaintenancereport.page.html',
  styleUrls: ['./engineermaintenancereport.page.scss'],
})
export class EngineermaintenancereportPage implements OnInit {

  maintenancereportForm;

  maintenancereportlist=[];

  userlist = JSON.parse(localStorage.getItem("userlist"));
  currentdate = new Date().toISOString();

  getDate;
  overallcomments='';
  engineercomments='';

  constructor(private router: Router, private commonservice: AIREIService, private fb: FormBuilder, private service: EngineerServiceService) {
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
        this.maintenancereportlist = resultdata.data;

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
        }*/
        
      }else{
        this.maintenancereportlist = [];
        /*this.overallcomments='';
        this.engineercomments='';*/
        this.commonservice.presentToast('No Record Found!');
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
    this.router.navigate(["/engineermaintenancecomments", { item: JSON.stringify(value) }]);
  }
}
