import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lubricant-edit',
  templateUrl: './lubricant-edit.page.html',
  styleUrls: ['./lubricant-edit.page.scss'],
})
export class LubricantEditPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  month = moment(new Date().toISOString()).format("MM");
  year = moment(new Date().toISOString()).format("YYYY");

  lubricantForm;
  machineForm;
  params;

  typeArr = [];
  stationArr = [];
  locatioArr = [];
  partArr = [];

  selectyear = {
    form:null
  };
 
  selectmonth = {
    form:null
  }; 

  selectweek = {
    form:null
  };
  
  boolgreasing=false;
  boolgearboxoil=false;
  boolhydrateoil=false;
  boolcompressoroil=false;

  constructor(private fb: FormBuilder, private service: StoreServiceService, private commonservice: AIREIService, private route: ActivatedRoute) { 

    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);

    if(this.params.chkGreasing==1)
    {
      this.boolgreasing=true;
    }

    if(this.params.chkGearBoxOil==1)
    {
      this.boolgearboxoil=true;
    }

    if(this.params.chkHydralicOil==1)
    {
      this.boolhydrateoil=true;
    }

    if(this.params.chkCompressorOil==1)
    {
      this.boolcompressoroil=true;
    }

    this.lubricantForm = this.fb.group({
      year: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required),
      week: new FormControl('', Validators.required),
      greasing: new FormControl(this.boolgreasing),
      gearboxoil: new FormControl(this.boolgearboxoil),
      hydrateroil: new FormControl(this.boolhydrateoil),
      compressoroil: new FormControl(this.boolcompressoroil)
    });

    this.machineForm = this.fb.group({      
      station_name: new FormControl('', Validators.required),
      select_location: new FormControl('', Validators.required),
      select_part: new FormControl('', Validators.required),      
      tacomments: new FormControl('', Validators.required),
      //tatypeid: new FormControl('', Validators.required),
      materialitemRows: this.fb.array([])
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.selectyear.form = this.params.year;
    this.selectmonth.form = this.params.month;
    this.selectweek.form = this.params.week;
    this.getStation();
  }

  ionViewDidEnter() {
    this.selectyear.form = this.params.year;
    this.selectmonth.form = this.params.month;
    this.selectweek.form = this.params.week;
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
      //tatypeid: new FormControl(value.tatypeid, Validators.required),
      station_name: new FormControl(value.station_name, Validators.required),
      select_location: new FormControl(value.select_location, Validators.required),
      select_part: new FormControl(value.select_part, Validators.required),
      tacomments: new FormControl(value.tacomments, Validators.required),
    });
  }

  addNewRow() {

    if(this.lubricantForm.valid)
    {
      if(Number(this.lubricantForm.value.greasing)==0 && Number(this.lubricantForm.value.gearboxoil)==0 && Number(this.lubricantForm.value.hydrateroil)==0 && Number(this.lubricantForm.value.compressoroil)==0){
        this.commonservice.presentToast("Please check the Type");
      }else{
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
      }

    }else
    {
      this.commonservice.presentToast('Please fill the Data(s)');
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
    let station_id_Arr = [];
    let location_id_Arr = [];
    let part_id_Arr = [];
    let comments_Arr = [];

    const machinecontrol = (
      this.machineForm.get('materialitemRows')
    )

    for (let i = 0; i < machinecontrol.length; i++) {
      const controlsub = <FormGroup>(
        this.machineForm.get(['materialitemRows', i])
      );

      //const eachctypeid = controlsub.get('tatypeid').value;
      const eachstation = JSON.parse(controlsub.get('station_name').value);
      const eachlocation= JSON.parse(controlsub.get('select_location').value);
      const eachpart = JSON.parse(controlsub.get('select_part').value);
      const eachcomments = controlsub.get('tacomments').value;      
      
      //type_Arr.push(eachctypeid);
      station_id_Arr.push(eachstation.station_id);
      location_id_Arr.push(eachlocation.location_id);
      part_id_Arr.push(eachpart.item_id);
      comments_Arr.push(eachcomments);
    }

    //console.log(type_Arr);

    const req = {      
      requester_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      year: this.lubricantForm.value.year,
      month: this.lubricantForm.value.month,
      week: this.lubricantForm.value.week,      
      station_id: station_id_Arr.join(),
      location_id: location_id_Arr.join(),
      part_id: part_id_Arr.join(),
      Remarks: comments_Arr.join("~"),
      greasing: Number(this.lubricantForm.value.greasing),
      gearboxoil: Number(this.lubricantForm.value.gearboxoil),
      hydralicoil: Number(this.lubricantForm.value.hydrateroil),
      compressoroil: Number(this.lubricantForm.value.compressoroil),
      //type_id: type_Arr.join("~"),
    };

    //console.log(req);

    this.service.saveLubricant(req).then(result => 
    {
      var resultdata: any;
      resultdata = result;
    
      console.log(resultdata);
    
      if (resultdata.httpcode == 200) 
      {
        this.commonservice.presentToast('Saved Successfully!');
            
        /*this.lubricantForm.reset();
        this.machineForm.reset();*/
    
        const machinearr = <FormArray>this.machineForm.controls.materialitemRows;
        while (machinearr.length) {
          machinearr.removeAt(machinearr.length - 1);
        }
        
        this.getStation();
    
      } else 
      {
        this.commonservice.presentToast('Saved Failed!');
      }
    });

  }

  /*selectType(index, checkbox : String){
    //console.log(index);

    if(this.typeList[index].checked === false)
    {
      this.selectedArray.push(checkbox);
      this.selectedIdArray.push(index+1);
    }else{
      let index = this.removeCheckedFromArray(checkbox);
      let indexId = this.removeCheckedIdFromArray(index+1);
      this.selectedArray.splice(index,1);
      this.selectedIdArray.splice(indexId,1);
    }
   }

  //Removes checkbox from array when you uncheck it
  removeCheckedFromArray(checkbox : String) {
    return this.selectedArray.findIndex((category)=>{
      return category === checkbox;
    })
  }

  removeCheckedIdFromArray(checkbox : String) {
    return this.selectedIdArray.findIndex((category)=>{
      return category === checkbox;
    })
  }*/
  
}
