import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AIREIService } from 'src/app/api/api.service';
import { BoilerServiceService } from 'src/app/services/boiler-service/boiler-service.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-boilerview',
  templateUrl: './boilerview.page.html',
  styleUrls: ['./boilerview.page.scss'],
})
export class BoilerviewPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  fromdate = new Date().toISOString();
  todate = new Date().toISOString();

  tabs_segment

  frequencyForm;
  frequencyList = [];

  chemicalForm;
  chemicalList = [];

  waterForm;
  waterList = [];

  levelForm;
  levelList = [];

  getFromDate;
  getToDate;

  constructor(private router: Router, private fb: FormBuilder, private commonservice: AIREIService, private service: BoilerServiceService) {

    this.frequencyForm = this.fb.group({
      from_date: new FormControl(this.fromdate),
      to_date: new FormControl(this.todate)
    });

    this.chemicalForm = this.fb.group({
      from_date: new FormControl(this.fromdate),
      to_date: new FormControl(this.todate)
    });

    this.waterForm = this.fb.group({
      from_date: new FormControl(this.fromdate),
      to_date: new FormControl(this.todate)
    });

    this.levelForm = this.fb.group({
      from_date: new FormControl(this.fromdate),
      to_date: new FormControl(this.todate)
    });

    this.tabs_segment = "frequency";

   }

  ngOnInit() {
  }

  callAPI(type)
  {
    if (type == 'Frequency') {
      this.boiler_freq_save(type);
    }

    if (type == 'Chemical') {
      this.btn_chemical_save(type);
    }

    if (type == 'Water') {
      this.btn_water_save(type);
    }

    if (type == 'Level') {
      this.btn_level_save(type);
    }
  }

  boiler_freq_save(type) 
  {
    this.getFromDate = moment(this.frequencyForm.value.from_date).format("YYYY-MM-DD");
    this.getToDate = moment(this.frequencyForm.value.to_date).format("YYYY-MM-DD");

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.getFromDate,
      todate:  this.getToDate
    };

    this.service.boiler_view(type, req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {        
        this.frequencyList = resultdata.data;
      } else {
        this.frequencyList=[];
        this.commonservice.presentToast('No Record Found!');
      }
    });
  }

  btn_chemical_save(type) 
  {
    this.getFromDate = moment(this.frequencyForm.value.from_date).format("YYYY-MM-DD");
    this.getToDate = moment(this.frequencyForm.value.to_date).format("YYYY-MM-DD");

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.getFromDate,
      todate:  this.getToDate
    };

    this.service.boiler_view(type, req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {        
        this.chemicalList = resultdata.data;
      } else {
        this.chemicalList=[];
        this.commonservice.presentToast('No Record Found!');
      }
    });
  }

  btn_water_save(type) 
  {
    this.getFromDate = moment(this.frequencyForm.value.from_date).format("YYYY-MM-DD");
    this.getToDate = moment(this.frequencyForm.value.to_date).format("YYYY-MM-DD");

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.getFromDate,
      todate:  this.getToDate
    };

    this.service.boiler_view(type, req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {        
        this.waterList = resultdata.data;
      } else {
        this.waterList=[];
        this.commonservice.presentToast('No Record Found!');
      }
    });
  }

  btn_level_save(type) 
  {
    this.getFromDate = moment(this.frequencyForm.value.from_date).format("YYYY-MM-DD");
    this.getToDate = moment(this.frequencyForm.value.to_date).format("YYYY-MM-DD");

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.getFromDate,
      todate:  this.getToDate
    };

    this.service.boiler_view(type, req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {        
        this.levelList = resultdata.data;
      } else {
        this.levelList=[];
        this.commonservice.presentToast('No Record Found!');
      }
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  btn_View(value) {
    this.router.navigate(["/boiler-hourlyview", { item: JSON.stringify(value) }]);
    //console.log(value);
  }

}
