import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shutdownmaintenance-add',
  templateUrl: './shutdownmaintenance-add.page.html',
  styleUrls: ['./shutdownmaintenance-add.page.scss'],
})
export class ShutdownmaintenanceAddPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  sdmpdate = new Date().toISOString();
  fromtime = moment(new Date().toISOString()).format("HH:mm");
  totime = moment(new Date().toISOString()).format("HH:mm");
  

  sdmpForm;
  fitterForm;
  jobForm;
  getDate;
 
  teamleadArr = [];
  fitterArr = [];
  
  constructor(private router: Router, private fb: FormBuilder, private service: StoreServiceService, private commonservice: AIREIService) {

    this.sdmpForm = this.fb.group({
      sdmpdate: new FormControl(this.sdmpdate),
      fromtime: new FormControl(this.fromtime),
      totime: new FormControl(this.totime),
      type: new FormControl('', Validators.required),
      select_teamlead: new FormControl('', Validators.required),
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
  }

  ionViewDidEnter() {
    this.getTeamLead();
    this.getFitter();
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

    this.getDate = moment(this.sdmpForm.value.sdmpdate).format("YYYY-MM-DD");

    const req = {      
      requester_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      shutdown_id: 0,
      date: this.getDate,
      fromtime: this.sdmpForm.value.fromtime,
      totime: this.sdmpForm.value.totime,      
      type: this.sdmpForm.value.type,
      teamhead_user_id: JSON.parse(this.sdmpForm.get('select_teamlead').value).user_id,
      fiter_user_id: fitter_id_Arr.join(),
      jobs: job_Arr.join("~"),
    };

    console.log(req);

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

}
