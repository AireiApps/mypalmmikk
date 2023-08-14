import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AIREIService } from 'src/app/api/api.service';
import { BoilerServiceService } from 'src/app/services/boiler-service/boiler-service.service';
import { ImageUploadService } from 'src/app/services/imageupload-service/imageupload';
import * as moment from 'moment';

@Component({
  selector: 'app-boiler-insert',
  templateUrl: './boiler-insert.page.html',
  styleUrls: ['./boiler-insert.page.scss'],
})
export class BoilerInsertPage implements OnInit {    

  frequencyForm;
  chemicalForm;
  waterForm;
  levelForm;
  
  getwater_cla_datetime;
  getsand_filter_datetime;
  getsoft_reg_datetime;
  
  todaydate = moment(new Date().toISOString()).format("YYYY-MM-DD")

  userlist = JSON.parse(localStorage.getItem("userlist"));

  tabs_segment;

  imagePaths = {
    steampressure_path: "",
    boilerfuelstatus_path: "",
    turbine_path: "",
    kilowatt_path: "",
    smokeanalysis_path: "",
    waterclarifierdrainout_path: "",
    sandfilterbackwash_path: "",
    softenerregeneration_path:""
  };

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");

  constructor(private fb: FormBuilder, private commonservice: AIREIService, private service: BoilerServiceService, private imgUpload: ImageUploadService) {        
    
    this.frequencyForm = this.fb.group({
      //water_gage: new FormControl("", Validators.required),
      //pressure_gage: new FormControl("", Validators.required),
      steam_consumption: new FormControl("", Validators.required),
      boiler_pressure: new FormControl("", Validators.required),
      steampressure_comments: new FormControl(""),
      boilerfuelstatus_comments: new FormControl(""),
      turbine_comments: new FormControl(""),
      kilowatt_comments: new FormControl(""),
      smokeanalysis_comments: new FormControl("")
    });

    this.chemicalForm = this.fb.group({
      corrostion_in: new FormControl("", Validators.required),
      scale_in: new FormControl("", Validators.required),
      sludge_con: new FormControl("", Validators.required),
      online_clean: new FormControl("", Validators.required)

    });

    this.waterForm = this.fb.group({
      water_cla: new FormControl("", Validators.required),
      sand_filter: new FormControl("", Validators.required),
      soft_reg: new FormControl("", Validators.required),
      softener_hard: new FormControl("", Validators.required)
      //tds: new FormControl("", Validators.required)

    });

    this.levelForm = this.fb.group({
      overhead_tank: new FormControl("", Validators.required),
      boiler_feed: new FormControl("", Validators.required),
      turbine_oil: new FormControl("", Validators.required)
    });

    this.tabs_segment = "frequency"

  }

  ngOnInit() {
  }

  ImageUpload(type) {
    
    //this.keyboard.hide;

    if(type=='SteamPressure')
    {
      var areq = "steampressure";
    }

    if(type == "BoilerFuelStatus")
    {
      var areq = "boilerfuelstatus";
    }

    if(type=='Turbine')
    {
      var areq = "turbine";
    }
    
    if(type=='Kilowatt')
    {
      var areq = "kilowatt";
    }

    if(type=='SmokeAnalysis')
    {
      var areq = "smokeanalysis";
    }

    if(type=='WaterClarifierDrainOut')
    {
      var areq = "waterclarifierdrainout";
    }

    if(type=='SandFilterBackwash')
    {
      var areq = "sandfilterbackwash";
    }

    if(type=='SoftenerRegeneration')
    {
      var areq = "softenerregeneration";
    }
    
    this.imgUpload.ImageUploadBoiler(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {

          if(type=='SteamPressure')
          {
            this.imagePaths.steampressure_path = resultdata.data.uploaded_path;
          }

          if(type=='BoilerFuelStatus')
          {
            this.imagePaths.boilerfuelstatus_path = resultdata.data.uploaded_path;
          }

          if(type=='Turbine')
          {
            this.imagePaths.turbine_path = resultdata.data.uploaded_path;
          }

          if(type=='Kilowatt')
          {
            this.imagePaths.kilowatt_path = resultdata.data.uploaded_path;
          }
      
          if(type=='SmokeAnalysis')
          {
            this.imagePaths.smokeanalysis_path = resultdata.data.uploaded_path;
          }

          if(type=='WaterClarifierDrainOut')
          {
            this.imagePaths.waterclarifierdrainout_path = resultdata.data.uploaded_path;
          }

          if(type=='SandFilterBackwash')
          {
            this.imagePaths.sandfilterbackwash_path = resultdata.data.uploaded_path;
          }

          if(type=='SoftenerRegeneration')
          {
            this.imagePaths.softenerregeneration_path = resultdata.data.uploaded_path;
          }
          
          this.commonservice.presentToast("Image Added Successfully!");
        } else {
          this.commonservice.presentToast("Image Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  boiler_log_save(type) {
    if (type == 'freq') {
      if (!this.frequencyForm.valid) {
        this.commonservice.presentToast("Please Fill the Form");
        return;
      }

    }
    if (type == 'chemical') {
      if (!this.chemicalForm.valid) {
        this.commonservice.presentToast("Please Fill the Form");
        return;
      }
    }

    if (type == 'water') {
      if (!this.waterForm.valid) {
        this.commonservice.presentToast("Please Fill the Form");
        return;
      }
    }
    if (type == 'level') {
      if (!this.levelForm.valid) {
        this.commonservice.presentToast("Please Fill the Form");
        return;
      }
    }

    var req = {
      "log_date": this.todaydate,
      "Entrydate": this.todaydate,
      "user_id": this.userlist.userId,
      "millcode": this.userlist.millcode
    };

    this.service.boiler_log_insert(req).then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        let boilerId = resultdata.HeadBoilerId;

        if (type == 'freq') {
          this.boiler_freq_save(type, boilerId);
        }

        if (type == 'chemical') {
          this.btn_chemical_save(type, boilerId);
        }

        if (type == 'water') {
          this.btn_water_save(type, boilerId);
        }

        if (type == 'level') {
          this.btn_level_save(type, boilerId);
        }

      } else {
        this.commonservice.presentToast("Boiler log insert failed")
      }
    });
  }

  boiler_freq_save(type, boilerId) {

    var req = {
      "AshRemoval": "10",
      "BlowDown": "10",
      "HeadBoilerId": boilerId,
      "LowWaterLevelTesting": "100",
      "PressureGageSteam": "",
      "SootBlow": 1,
      "SteamOutput": this.frequencyForm.value.steam_consumption,
      "boilerpressure": this.frequencyForm.value.boiler_pressure,
      "WaterGageGlass": "",
      "WaterGageGlassTesting": "TT",
      "steam_pressure_consumption_image":this.imagePaths.steampressure_path,
      "steam_pressuer_consumption_comments":this.frequencyForm.value.steampressure_comments,
      "boilerfuelstatus_image":this.imagePaths.boilerfuelstatus_path,
      "boilerfuelstatus_comments":this.frequencyForm.value.boilerfuelstatus_comments,
      "turbine_image":this.imagePaths.turbine_path,
      "turbine_comments":this.frequencyForm.value.turbine_comments,
      "killowatt_consumption_image":this.imagePaths.kilowatt_path,
      "killowatt_pressuer_consumption_comments":this.frequencyForm.value.kilowatt_comments,
      "smoke_analysis_image":this.imagePaths.smokeanalysis_path,
      "smoke_analysis_comments":this.frequencyForm.value.smokeanalysis_comments
    };

    //console.log(req);

    this.service.boiler_insert(type, req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.frequencyForm.reset();
        
        this.imagePaths.steampressure_path='';
        this.imagePaths.turbine_path='';
        this.imagePaths.kilowatt_path='';
        this.imagePaths.smokeanalysis_path='';

        this.commonservice.presentToast("Boiler Frequency Inserted")
      } else {
        this.commonservice.presentToast("Boiler Frequency insert failed")
      }
    });

  }

  btn_chemical_save(type, boilerId) {

    var req = {
      "corrosion_inhibitor": this.chemicalForm.value.corrostion_in,
      "scale_inhibitor": this.chemicalForm.value.scale_in,
      "HeadBoilerId": boilerId,
      "sludge_conditioner": this.chemicalForm.value.sludge_con,
      "on_line_cleaning": this.chemicalForm.value.online_clean,
    };

    this.service.boiler_insert(type, req).then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.chemicalForm.reset();

        this.commonservice.presentToast("Boiler Chemical Inserted")


      } else {
        this.commonservice.presentToast("Boiler Chemical insert failed")
      }
    });

  }

  btn_water_save(type, boilerId) {
    
    this.getwater_cla_datetime = this.todaydate.concat(' ', moment(this.waterForm.value.water_cla).format("HH:mm"))
    this.getsand_filter_datetime = this.todaydate.concat(' ', moment(this.waterForm.value.sand_filter).format("HH:mm"))
    this.getsoft_reg_datetime = this.todaydate.concat(' ', moment(this.waterForm.value.soft_reg).format("HH:mm"))

    var req = {
      "water_clarifier_drain_out": this.getwater_cla_datetime,
      "water_clarifier_drain_out_image":this.imagePaths.waterclarifierdrainout_path,
      "sand_filter_backwash": this.getsand_filter_datetime,
      "sand_filter_backwash_image":this.imagePaths.sandfilterbackwash_path,
      "softener_regeneration": this.getsoft_reg_datetime,
      "softener_regeneration_image":this.imagePaths.softenerregeneration_path,
      "softener_hardness": this.waterForm.value.softener_hard,
      "tds": "",
      "HeadBoilerId": boilerId,
    };

    console.log(req);

    this.service.boiler_insert(type, req).then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {

        this.waterForm.reset();

        this.imagePaths.waterclarifierdrainout_path='';
        this.imagePaths.sandfilterbackwash_path='';
        this.imagePaths.softenerregeneration_path='';        

        this.commonservice.presentToast("Boiler Water Inserted")

      } else {
        this.commonservice.presentToast("Boiler Water insert failed")
      }
    });
  }

  btn_level_save(type, boilerId) {


    var req = {
      "over_head_tank": this.levelForm.value.overhead_tank,
      "boiler_feed_water_tank": this.levelForm.value.boiler_feed,
      "turbine_oil_level": this.levelForm.value.turbine_oil,
      "HeadBoilerId": boilerId,
    };

    //console.log(req);

    this.service.boiler_insert(type, req).then(result => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.levelForm.reset();

        this.commonservice.presentToast("Boiler Level Inserted")


      } else {
        this.commonservice.presentToast("Boiler Level insert failed")
      }
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
