import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-shutdownmaintenance-view',
  templateUrl: './shutdownmaintenance-view.page.html',
  styleUrls: ['./shutdownmaintenance-view.page.scss'],
})
export class ShutdownmaintenanceViewPage implements OnInit {

  sdmpdetailForm;
  fitterlist = [];
  joblist = [];

  params;
  userlist = JSON.parse(localStorage.getItem("userlist"));

  getdate;
  getfromtime;
  gettotime;
  gettype;
  getteamlead;

  constructor(private fb: FormBuilder, private service: StoreServiceService, private commonservice: AIREIService, private route: ActivatedRoute) { 
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);
    this.getdate = this.params.date;    
    this.getfromtime = this.params.from_time;
    this.gettotime = this.params.to_time;
    this.gettype = this.params.type_id;
    if(this.gettype==1)
    {
      this.gettype='Mechanical';
    }

    if(this.gettype==2)
    {
      this.gettype='Electrical';
    }

    if(this.gettype==3)
    {
      this.gettype='Process';
    }
    this.getteamlead = this.params.team_lead;

    this.sdmpdetailForm = this.fb.group({
      sdmpdate: new FormControl(this.getdate),
      fromtime: new FormControl(this.getfromtime),
      totime: new FormControl(this.gettotime),
      type: new FormControl(this.gettype),
      teamlead: new FormControl(this.getteamlead)
    });

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {   
    this.getFitterView();
    this.getJobView();
  }

  ionViewDidEnter() {  
    this.getFitterView();
    this.getJobView();
  }

  getFitterView() {
    let req = {
      shutdown_id: this.params.shutdown_id,
      millcode: this.userlist.millcode
    }

    //console.log(req);

    this.service.getFitterView(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.fitterlist = resultdata.data        
      }else{
        this.fitterlist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });

  }

  getJobView() {
    let req = {
      shutdown_id: this.params.shutdown_id,
      millcode: this.userlist.millcode
    }

    //console.log(req);

    this.service.getJobView(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.joblist = resultdata.data        
      }else{
        this.joblist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });

  }

}
