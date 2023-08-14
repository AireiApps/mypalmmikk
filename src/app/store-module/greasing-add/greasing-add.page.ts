import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greasing-add',
  templateUrl: './greasing-add.page.html',
  styleUrls: ['./greasing-add.page.scss'],
})
export class GreasingAddPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  month = moment(new Date().toISOString()).format("MM");
  year = moment(new Date().toISOString()).format("YYYY");

  greasingForm;
  machineForm;
  
  stationArr = [];
  locatioArr = [];
  partArr = [];  


  constructor(private router: Router, private fb: FormBuilder, private service: StoreServiceService, private commonservice: AIREIService) 
  {
    this.greasingForm = this.fb.group({
      year: new FormControl(this.year),
      month: new FormControl('', Validators.required),
      week: new FormControl('', Validators.required),      
      materialitemRows: this.fb.array([])      
    });

    this.machineForm = this.fb.group({
      station_name: new FormControl('', Validators.required),
      select_location: new FormControl('', Validators.required),
      select_part: new FormControl('', Validators.required),      
      tacomments: new FormControl('', Validators.required),
      materialitemRows: this.fb.array([])
    });
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getStation();
  }

  ionViewDidEnter() {
    this.getStation();    
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
      millcode: this.userlist.millcode,
      stationid: station.station_id
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

  parseString(item) {
    return JSON.stringify(item);
  }

  get formArr() {
    return this.machineForm.get('materialitemRows') as FormArray;
  }

  initItemRows(value) {
    return this.fb.group({
      station_name: new FormControl(value.station_name, Validators.required),
      select_location: new FormControl(value.select_location, Validators.required),
      select_part: new FormControl(value.select_part, Validators.required),
      tacomments: new FormControl(value.tacomments, Validators.required),
    });
  }

  addNewRow() {
    if(this.greasingForm.valid)
    {
      if (this.machineForm.valid) 
      {        
        this.formArr.push(this.initItemRows(this.machineForm.value));
        this.machineForm.controls.select_part.setValue('');
        this.machineForm.controls.select_location.setValue('');        
        this.machineForm.controls.tacomments.setValue('');
      } 
      else 
      {
        this.commonservice.presentToast('Please Fill the Machine List!');
      }
    }else
    {
      this.commonservice.presentToast('Please Check Year, Month and Week');
    }
  }

  getItembyKey(key, itemRow, param) {
    const eachitem = JSON.parse(itemRow.get(key).value);    
    return eachitem[param];
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  btn_save(){
    //this.commonservice.presentToast('Under Developement');
    let station_id_Arr = [];
    let location_id_Arr = [];
    let part_id_Arr = [];
    let remarks_Arr = [];

    const machinecontrol = (
      this.machineForm.get('materialitemRows')
    )

    for (let i = 0; i < machinecontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.machineForm.get(['materialitemRows', i])
      );

      const eachstation = JSON.parse(controlsub.get('station_name').value);
      const eachlocation= JSON.parse(controlsub.get('select_location').value);
      const eachpart = JSON.parse(controlsub.get('select_part').value);
      const eachcomments = controlsub.get('tacomments').value;
      
      station_id_Arr.push(eachstation.station_id);
      location_id_Arr.push(eachlocation.location_id);
      part_id_Arr.push(eachpart.item_id);
      remarks_Arr.push(eachcomments);
    }

    const req = {      
      requester_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      year: this.greasingForm.value.year,
      month: this.greasingForm.value.month,
      week: this.greasingForm.value.week,      
      station_id: station_id_Arr.join(),
      location_id: location_id_Arr.join(),
      part_id: part_id_Arr.join(),
      Remarks: remarks_Arr.join("~"),
    };

    //console.log(req);

    this.service.saveGreasing(req).then(result => {
      var resultdata: any;
      resultdata = result;

      console.log(resultdata);

      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast('Saved Successfully!');
        
        /*this.greasingForm.reset();
        this.machineForm.reset();*/

        const machinearr = <FormArray>this.machineForm.controls.materialitemRows;
        while (machinearr.length) {
          machinearr.removeAt(machinearr.length - 1);
        }
        
        this.getStation();

        this.router.navigate(["/greasing-list"]);

      } else {
        this.commonservice.presentToast('Saved Failed!');
      }
    });
  }

}
