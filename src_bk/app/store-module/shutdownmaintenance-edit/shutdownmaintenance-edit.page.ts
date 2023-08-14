import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shutdownmaintenance-edit',
  templateUrl: './shutdownmaintenance-edit.page.html',
  styleUrls: ['./shutdownmaintenance-edit.page.scss'],
})
export class ShutdownmaintenanceEditPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  sdmpForm;
  fitterForm;
  jobForm;
  params;
 
  teamleadArr = [];
  fitterArr = [];
 
  selectfromtime = {
    form:null
  }; 

  selecttotime = {
    form:null
  };

  selecttype = {
    form:null
  };

  selectteamlead = {
    form:null
  };

  fitterlist = [];
  joblist = [];

  getdate;
  getfromtime;
  gettotime;
  gettype;
  getteamlead;

  constructor(private fb: FormBuilder, private service: StoreServiceService, private commonservice: AIREIService, private route: ActivatedRoute, private router: Router) {
    
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

    this.sdmpForm = this.fb.group({
      sdmpdate: new FormControl(this.getdate),
      fromtime: new FormControl(this.getfromtime),
      totime: new FormControl(this.gettotime),
      type: new FormControl(this.gettype),
      teamlead: new FormControl(this.getteamlead),
      fitteritemRows: this.fb.array([]),
      jobitemRows: this.fb.array([])
    });

    this.fitterForm = this.fb.group({
      select_fitter: new FormControl('', Validators.required),
      fitteritemRows: this.fb.array([])
    });

    this.jobForm = this.fb.group({
      tajob: new FormControl('', Validators.required),
      jobitemRows: this.fb.array([])
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getTeamLead();
    this.getFitter();
    this.getFitterView();
    this.getJobView();
  }

  ionViewDidEnter() {
    this.getTeamLead();
    this.getFitter();
    this.getFitterView();
    this.getJobView();
  }

  getTeamLead() {

    const req = {
      millcode: this.userlist.millcode
    };

    this.service.getEmployeeList(req).then(result => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.teamleadArr = resultdata.data;
      }
    });
  }

  getFitter() {
    const req = {
      millcode: this.userlist.millcode
    };

    this.service.getEmployeeList(req).then(result => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.fitterArr = resultdata.data;
      }
    });
  }

  getFitterView() {
    let req = {
      shutdown_id: this.params.shutdown_id,
      millcode: this.userlist.millcode
    }

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

  parseString(item) {
    return JSON.stringify(item);
  }

  get fitterformArr() {
    return this.fitterForm.get('fitteritemRows') as FormArray;
  }

  initFitterRows(value) {
    return this.fb.group({
      select_fitter: new FormControl(value.select_fitter, Validators.required),
    });
  }

  addFitterNewRow() {
    if(this.sdmpForm.valid)
    {
      if (this.fitterForm.valid) 
      {
        this.fitterformArr.push(this.initFitterRows(this.fitterForm.value));
        this.fitterForm.controls.select_fitter.setValue('');
      } 
      else 
      {
        this.commonservice.presentToast('Please Fill the Fitter List!');
      }
    }else
    {
      this.commonservice.presentToast('Please Check all the Fields are Filled');
    }
  }

  getItembyKey(key, itemRow, param) {
    const eachitem = JSON.parse(itemRow.get(key).value);
    return eachitem[param];
  }

  deleteFitterRow(index: number) {
    this.fitterformArr.removeAt(index);
  }

  get jobformArr() {
    return this.jobForm.get('jobitemRows') as FormArray;
  }

  initJobRows(value) {
    return this.fb.group({
      tajob: new FormControl(value.tajob, Validators.required),
    });
  }

  addJobNewRow() {
    if(this.sdmpForm.valid)
    {
      if (this.jobForm.valid) 
      {
        this.jobformArr.push(this.initJobRows(this.jobForm.value));
        this.jobForm.controls.tajob.setValue('');
      } 
      else 
      {
        this.commonservice.presentToast('Please Fill the Job List!');
      }
    }else
    {
      this.commonservice.presentToast('Please Check all the Fields are Filled');
    }
  }

  deleteJobRow(index: number) {
    this.fitterformArr.removeAt(index);
  }

  btn_save()
  {
    let fitter_id_Arr = [];
    let job_Arr = [];

    const fittercontrol = (
      this.fitterForm.get('fitteritemRows')
    ) 
    
    const jobcontrol = (
      this.jobForm.get('jobitemRows')
    )

    for (let i = 0; i < fittercontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.fitterForm.get(['fitteritemRows', i])
      );

      const eachfitter = JSON.parse(controlsub.get('select_fitter').value);

      fitter_id_Arr.push(eachfitter.user_id);
    }

    for (let i = 0; i < jobcontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.jobForm.get(['jobitemRows', i])
      );

      const eachjob = controlsub.get('tajob').value;
      job_Arr.push(eachjob);
    }

    const req = {      
      requester_id: this.userlist.userId,
      shutdown_id: this.params.shutdown_id,
      millcode: this.userlist.millcode,
      date: this.params.date,
      fromtime: this.params.from_time,
      totime: this.params.to_time,      
      type: this.params.type_id,
      teamhead_user_id: this.params.team_lead_id,
      fiter_user_id: fitter_id_Arr.join(),
      jobs: job_Arr.join("~"),
    };

    //console.log(req);

    this.service.saveSDMP(req).then(result => {
      var resultdata: any;
      resultdata = result;

      console.log(resultdata);

      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast('Saved Successfully!');
        
        /*this.sdmpForm.reset();
        this.fitterForm.reset();
        this.jobForm.reset();*/

        const fitterarr = <FormArray>this.fitterForm.controls.fitteritemRows;
        while (fitterarr.length) {
          fitterarr.removeAt(fitterarr.length - 1);
        }

        const jobarr = <FormArray>this.jobForm.controls.jobitemRows;
        while (jobarr.length) {
          jobarr.removeAt(jobarr.length - 1);
        }

        this.getTeamLead();
        this.getFitter();

        this.router.navigate(["/shutdownmaintenance-list"]);

      } else {
        this.commonservice.presentToast('Saved Failed!');
      }
    });

  }


  btn_deletefitter(value) {
    for(let i = 0; i < this.fitterlist.length; i++) {

      if(this.fitterlist[i] == value){
        this.fitterlist.splice(i, 1);
        this.deleteFitterList(JSON.parse(value.id));
      }
    }
  }

  
  btn_deletejob(value) {
    for(let i = 0; i < this.joblist.length; i++) {

      if(this.joblist[i] == value){
        this.joblist.splice(i, 1);
        this.deleteJobList(JSON.parse(value.id));
      }
    }
  }

  deleteFitterList(fitterid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      maintainence_det_id: fitterid,
      maintainence_det_employee_id: 0,
    }

    this.service.deleteSDMPFitterList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {                
        this.commonservice.presentToast('Deleted Successfully...');
      }
    });
  }

  deleteJobList(jobid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      maintainence_det_id: jobid,
      maintainence_det_employee_id: 0,
    }

    this.service.deleteSDMPJobList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {                
        this.commonservice.presentToast('Deleted Successfully...');
      }
    });
  }

}
