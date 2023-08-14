import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';

import { AIREIService } from 'src/app/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly-maintenance-action',
  templateUrl: './weekly-maintenance-action.page.html',
  styleUrls: ['./weekly-maintenance-action.page.scss'],
})
export class WeeklyMaintenanceActionPage implements OnInit {

  maintenancedetailForm;
  machinelist = [];
  teamlist = [];
  params;
  userlist = JSON.parse(localStorage.getItem("userlist"));
  getyear;
  getmonth;
  getweek;
  
  getmaintenacedate;

  constructor(private router: Router, private fb: FormBuilder, private service: StoreServiceService, private commonservice: AIREIService, private route: ActivatedRoute, private httpservice: HttpserviceService) { 
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);

    this.getmaintenacedate = this.params.date;

    this.maintenancedetailForm = this.fb.group({
      maintenancedate: new FormControl(this.getmaintenacedate),
      maintenanceaction: new FormControl('', Validators.required),
      taComments: new FormControl('')
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();

    this.getyear = this.params.year;
    this.getmonth = this.params.month;
    this.getweek = this.params.week;
    this.callAPI();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();

    this.getyear = this.params.year;
    this.getmonth = this.params.month;
    this.getweek = this.params.week;
    this.callAPI();
  }

  callAPI() {
    this.getWeeklyMaintenanceView();
  }

  getWeeklyMaintenanceView() {
    let req = {
      maintainence_id: this.params.id,
      millcode: this.userlist.millcode
    }

    this.service.getWeeklyMaintanceView(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.machinelist = resultdata.data
        this.callteamAPI();
      }else{
        this.machinelist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });
  }

  callteamAPI() {
    this.getTeamView();
  }

  getTeamView() {
    let req = {
      maintainence_id: this.params.id,
      millcode: this.userlist.millcode
    }

    this.service.getTeamView(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.teamlist = resultdata.data        
      }else{
        this.teamlist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });

  }

  btn_save()
  {
    if(this.maintenancedetailForm.valid)
    {
      let req = {
        maintainence_id: this.params.id,
        millcode: this.userlist.millcode,
        action: this.maintenancedetailForm.value.maintenanceaction,
        comments : this.maintenancedetailForm.value.taComments
      }
      //console.log(req);
  
      this.service.saveWeeklyMaintenanceAction(req).then(result => {
        var resultdata: any;
        resultdata = result;      
        if (resultdata.httpcode == 200) {          
          this.router.navigate(["/weekly-maintenance-list"]);
        }else{          
          this.commonservice.presentToast('Action Update Failed...');
        }
      });
      
    }else{
      this.commonservice.presentToast('Action Selection is Mandatory');
    }
  }

}
