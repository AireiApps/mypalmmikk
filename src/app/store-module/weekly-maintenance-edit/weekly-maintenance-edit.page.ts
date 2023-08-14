import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { AIREIService } from 'src/app/api/api.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly-maintenance-edit',
  templateUrl: './weekly-maintenance-edit.page.html',
  styleUrls: ['./weekly-maintenance-edit.page.scss'],
})
export class WeeklyMaintenanceEditPage implements OnInit {
  weeklymaintenanceForm;
  machineForm;
  employeeForm;
  params;

  stationArr = [];
  locatioArr = [];
  partArr = [];  
  machinestatusArr = [];
  employeeArr = [];

  machinelist = [];
  teamlist = [];
  
  userlist = JSON.parse(localStorage.getItem("userlist"));
  //month = moment(new Date().toISOString()).format("MM");
  //year = moment(new Date().toISOString()).format("YYYY");

  maintenancedate = new Date().toISOString();

  getmaintenacedate;  

  // selectyear = {
  //   form:null
  // };
 
  // selectmonth = {
  //   form:null
  // }; 

  // selectweek = {
  //   form:null
  // };
  
  station='';
  location='';
  part='';
  machinestatus='';
  employee='';

  constructor(private fb: FormBuilder, private service: StoreServiceService, private commonservice: AIREIService, private route: ActivatedRoute, private httpservice: HttpserviceService, private router: Router) 
  {
    
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);

    this.getmaintenacedate = this.params.date;

    this.weeklymaintenanceForm = this.fb.group({
      maintenancedate: new FormControl(this.getmaintenacedate),      
      materialitemRows: this.fb.array([]),
      employeeitemRows: this.fb.array([])
    });

    this.machineForm = this.fb.group({
      station_name: new FormControl('', Validators.required),
      select_location: new FormControl('', Validators.required),
      select_part: new FormControl('', Validators.required),
      select_status: new FormControl('', Validators.required),
      tajob: new FormControl('', Validators.required),
      tacomments: new FormControl('', Validators.required),
      materialitemRows: this.fb.array([])
    });

    this.employeeForm = this.fb.group({
      select_employee: new FormControl('', Validators.required),
      employeeitemRows: this.fb.array([])
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();

    // this.selectyear.form = this.params.year;
    // this.selectmonth.form = this.params.month;
    // this.selectweek.form = this.params.week;
    this.getStation();
    this.getEmployee();
    this.getStatus();
    this.getWeeklyMaintenanceView();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    
    // this.selectyear.form = this.params.year;
    // this.selectmonth.form = this.params.month;
    // this.selectweek.form = this.params.week;
    this.getStation();
    this.getEmployee();
    this.getStatus();
    this.getWeeklyMaintenanceView();
  }

  getStation() {
    const req = {
      millcode: this.userlist.millcode
    };

    this.service.getStationList(req).then(result => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.stationArr = resultdata.data;
      }
    });
  }

  getLocation() {
    let station = JSON.parse(this.machineForm.value.station_name)

    const req = {
      stationid: station.station_id,
      millcode: this.userlist.millcode
    };

    this.service.getLocation(req).then(result => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.locatioArr = resultdata.data;
      }
    });
  }

  getParts() {
    let station = JSON.parse(this.machineForm.value.station_name)
    let location = JSON.parse(this.machineForm.value.select_location)

    const req = {
      millcode: this.userlist.millcode,
      stationid: station.station_id,
      locationid: location.location_id
    };

    this.service.getItems(req).then(result => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.partArr = resultdata.data;
      }
    });
  }

   getStatus() {
    const req = {
      millcode: this.userlist.millcode
    };

    this.service.getStatusList(req).then(result => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.machinestatusArr = resultdata.data;
      }
    });
  }

  onChangeStation() {
    this.partArr = [];
    this.locatioArr = [];
    this.machineForm.controls.select_part.setValue('');
    this.machineForm.controls.select_location.setValue('');

    this.getLocation();
  }

  onChangeLocation() {
    this.partArr = [];

    this.machineForm.controls.select_part.setValue('');

    this.getParts();
  }

  getEmployee() {
    const req = {
      millcode: this.userlist.millcode
    };

    this.service.getEmployeeList(req).then(result => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.employeeArr = resultdata.data;
      }
    });
  }

  getWeeklyMaintenanceView() {
    let req = {
      maintainence_id: this.params.id,
      millcode: this.userlist.millcode
    }

    this.service.getWeeklyMaintanceView(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) 
      {
        console.log(resultdata.data);

        if (resultdata.data.length > 0) 
        {          
          this.machinelist = resultdata.data;

          this.callteamAPI();
          /*let Station='';
          let Location='';
          let Part='';
          let MachineStatus='';
          let Employee='';

          for (let i = 0; i < resultdata.data.length; i++) 
          {
            for (let j = 0; j < this.stationArr.length; j++) 
            { 
                            
              if(resultdata.data[i].stationname==this.stationArr[j].station_name)
              {
                  Station = this.stationArr[j];
              }
            }

            for (let k = 0; k < this.locatioArr.length; k++) 
            { 
                            
              if(resultdata.data[i].locationname==this.locatioArr[k].location_name)
              {
                Location = this.locatioArr[k];
              }
            }

            for (let l = 0; l < this.partArr.length; l++) 
            {                            
              if(resultdata.data[i].partsname==this.partArr[l].item_name)
              {
                Part = this.partArr[l];
              }
            }

            for (let m = 0; m < this.machinestatusArr.length; m++) 
            {                            
              if(resultdata.data[i].partsname==this.machinestatusArr[m].machine_status)
              {
                MachineStatus = this.machinestatusArr[m];
              }
            }            

          }*/          
        }
      }else{
        this.machinelist = [];

        this.callteamAPI();
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
        this.teamlist = [];
      }
    });

  }

  parseString(item) {
    return JSON.stringify(item);
  }

  get formArr() {
    return this.machineForm.get('materialitemRows') as FormArray;
  }

  get employeeformArr() {
    return this.employeeForm.get('employeeitemRows') as FormArray;
  }

  initItemRows(value) {
    return this.fb.group({
      station_name: new FormControl(value.station_name, Validators.required),
      select_location: new FormControl(value.select_location, Validators.required),
      select_part: new FormControl(value.select_part, Validators.required),
      select_status: new FormControl(value.select_status, Validators.required),
      tajob: new FormControl(value.tajob, Validators.required),
      tacomments: new FormControl(value.tacomments, Validators.required),
    });
  }

  addNewRow() {
    if(this.weeklymaintenanceForm.valid)
    {
      if (this.machineForm.valid) 
      {
        this.formArr.push(this.initItemRows(this.machineForm.value));
        this.machineForm.controls.select_part.setValue('');
        this.machineForm.controls.select_location.setValue('');
        this.machineForm.controls.select_status.setValue('');
        this.machineForm.controls.tajob.setValue('');
        this.machineForm.controls.tacomments.setValue('');
      } 
      else 
      {
        this.commonservice.presentToast('Please Fill the Material List!');
      }
    }else
    {
      this.commonservice.presentToast('Please Check Year, Month and Week');
    }
  }

  initEmployeeItemRows(value) {
    return this.fb.group({
      select_employee: new FormControl(value.select_employee, Validators.required),
    });
  }

  addEmployeeNewRow() {
    if(this.weeklymaintenanceForm.valid)
    {
      if (this.employeeForm.valid) {
        this.employeeformArr.push(this.initEmployeeItemRows(this.employeeForm.value));
        this.employeeForm.controls.select_employee.setValue('');
      } else {
        this.commonservice.presentToast('Please Fill the Team List!');

      }
    }else{
      this.commonservice.presentToast('Please Check Year, Month and Week');
    }
  }

  btn_save() {
    let station_id_Arr = [];
    let location_id_Arr = [];
    let part_id_Arr = [];
    let machinestatus_id_Arr = [];
    let job_Arr = [];
    let comments_Arr = [];
    let employee_id_Arr = [];
    
    const machinecontrol = (
      this.machineForm.get('materialitemRows')
    ) 

    const employeecontrol = (
      this.employeeForm.get('employeeitemRows')
    )

    for (let i = 0; i < machinecontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.machineForm.get(['materialitemRows', i])
      );

      const eachstation = JSON.parse(controlsub.get('station_name').value);
      const eachlocation= JSON.parse(controlsub.get('select_location').value);
      const eachpart = JSON.parse(controlsub.get('select_part').value);
      const eachmachinestatus = JSON.parse(controlsub.get('select_status').value);
      const eachjob = controlsub.get('tajob').value;
      const eachcomments = controlsub.get('tacomments').value;
      
      station_id_Arr.push(eachstation.station_id);
      location_id_Arr.push(eachlocation.location_id);
      part_id_Arr.push(eachpart.item_id);
      machinestatus_id_Arr.push(eachmachinestatus.machine_id);
      job_Arr.push(eachjob);
      comments_Arr.push(eachcomments);
    }

    for (let i = 0; i < employeecontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.employeeForm.get(['employeeitemRows', i])
      );

      const eachemployee = JSON.parse(controlsub.get('select_employee').value);
      employee_id_Arr.push(eachemployee.user_id);
    }    
    
    const req = {      
      requester_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      maintainence_id: this.params.id,      
      // year: this.weeklymaintenanceForm.value.year,
      // month: this.weeklymaintenanceForm.value.month,
      // week: this.weeklymaintenanceForm.value.week,      
      station_id: station_id_Arr.join(),
      location_id: location_id_Arr.join(),
      part_id: part_id_Arr.join(),
      machine_id: machinestatus_id_Arr.join(),
      job: job_Arr.join("~"),
      comments: comments_Arr.join("~"),
      employee_id: employee_id_Arr.join(),
    };

    console.log(req);

    this.service.updateMaintenance(req).then(result => {
      var resultdata: any;
      resultdata = result;

      console.log(resultdata);

      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast('Updated Successfully!');
        
        /*this.weeklymaintenanceForm.reset();
        this.machineForm.reset();
        this.employeeForm.reset();*/

        const machinearr = <FormArray>this.machineForm.controls.materialitemRows;
        while (machinearr.length) {
          machinearr.removeAt(machinearr.length - 1);
        }

        const employeearr = <FormArray>this.employeeForm.controls.employeeitemRows;
        while (employeearr.length) {
          employeearr.removeAt(employeearr.length - 1);
        }

        this.getStation();
        this.getEmployee();
        this.getStatus();

        this.router.navigate(["/weekly-maintenance-list"]);

      } else {
        this.commonservice.presentToast('Saved Failed!');
      }
    });
  }

  getItembyKey(key, itemRow, param) {
    const eachitem = JSON.parse(itemRow.get(key).value);
    return eachitem[param];
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  deleteEmployeeRow(index: number) {
    this.employeeformArr.removeAt(index);
  }

  btn_deletemachine(value) {
    for(let i = 0; i < this.machinelist.length; i++) {

      if(this.machinelist[i] == value){
        this.machinelist.splice(i, 1);
        this.deleteWeeklyMachineList(JSON.parse(value.id));
      }
    }
  }

  
  btn_deleteteam(value) {
    for(let i = 0; i < this.teamlist.length; i++) {

      if(this.teamlist[i] == value){
        this.teamlist.splice(i, 1);
        this.deleteWeeklyTeamList(JSON.parse(value.id));
      }
    }
  }

  
  deleteWeeklyMachineList(machineid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      maintainence_det_id: machineid,
      maintainence_det_employee_id: 0,
    }

    console.log(req);

    this.service.deleteWeeklyMachineList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {                
        this.commonservice.presentToast('Deleted Successfully...');
      }
    });
  }

  deleteWeeklyTeamList(employeeid) {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      maintainence_det_id: 0,
      maintainence_det_employee_id: employeeid,
    }

    console.log(req);

    this.service.deleteWeeklyTeamList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {                
        this.commonservice.presentToast('Deleted Successfully...');
      }
    });
  }
}
