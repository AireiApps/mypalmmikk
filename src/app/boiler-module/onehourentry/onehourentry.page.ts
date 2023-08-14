import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { BoilerServiceService } from "src/app/services/boiler-service/boiler-service.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import * as moment from "moment";
import { ModalController, IonContent } from "@ionic/angular";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: "app-onehourentry",
  templateUrl: "./onehourentry.page.html",
  styleUrls: ["./onehourentry.page.scss"],
})
export class OnehourentryPage implements OnInit {
  @ViewChild("pageTop") pageTop: IonContent;

  userlist = JSON.parse(localStorage.getItem("userlist"));

  powerdistributionArr = [];
  boilerperformanceentryForm;
  turbineperformanceentryForm;

  imagePaths = {
    boilerpressuresteamoutputpath: "",
    boilerwaterlevelpath: "",
    smokeanalysispath: "",
    powerconsumptionpath: "",
    powerdistributionpath: "",
    frequencypath: "",
  };

  shiftid = '';
  shiftdate = '';

  currentdate = moment(new Date().toISOString()).format("YYYY-MM-DD");
  currenthour = moment(new Date().toISOString()).format("HH:00");

  tabs_segment;

  isCommentsenable = false;

  constructor(
    public modalController: ModalController,
    private activeroute: ActivatedRoute,
    private router: Router,
    private httpservice: HttpserviceService,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: BoilerServiceService,
    private imgUpload: ImageUploadService,
    private generalservice: GeneralserviceService
  ) {
    this.boilerperformanceentryForm = this.fb.group({
      pick_bphour: new FormControl(this.currenthour),
      txt_boilerpressure: new FormControl("", Validators.required),
      txt_steamoutput: new FormControl("", Validators.required),
      txt_boilerwaterlevel: new FormControl("", Validators.required),
      txt_opacity: new FormControl("", Validators.required),
      txt_concentration: new FormControl("", Validators.required),
    });

    this.turbineperformanceentryForm = this.fb.group({
      pick_tphour: new FormControl(this.currenthour),
      txt_inletpressure: new FormControl("", Validators.required),
      txt_nozzlepressure: new FormControl("", Validators.required),
      txt_oilpressure: new FormControl("", Validators.required),
      txt_powerconsumption: new FormControl("", Validators.required),
      txt_frequency: new FormControl("", Validators.required),
      select_powerdistribution: new FormControl("", Validators.required),
      taReason: new FormControl(""),
    });

    this.tabs_segment = "BoilerPerformance";
  }

  ngOnInit() {}

  getpowerdistributionList() {
    const req = {
      millcode: this.userlist.millcode,
    };

    this.service.getpowerdistributionList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.powerdistributionArr = resultdata.data;
      }
    });
  }

  ImageUpload(type) {
    this.imgUpload.ImageUploadBoiler(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          if (type == "BoilerPressureSteamOutput") {
            this.imagePaths.boilerpressuresteamoutputpath =
              resultdata.data.uploaded_path;
          }

          if (type == "BoilerWaterLevel") {
            this.imagePaths.boilerwaterlevelpath =
              resultdata.data.uploaded_path;
          }

          if (type == "SteamAnalysis") {
            this.imagePaths.smokeanalysispath = resultdata.data.uploaded_path;
          }

          if (type == "PowerConsumption") {
            this.imagePaths.powerconsumptionpath =
              resultdata.data.uploaded_path;
          }

          if (type == "Frequency") {
            this.imagePaths.frequencypath = resultdata.data.uploaded_path;
          }

          if (type == "PowerDistribution") {
            this.imagePaths.powerdistributionpath =
              resultdata.data.uploaded_path;
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

  boilerperformance_save() {
    if (this.boilerperformanceentryForm.valid) {
      var req = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        millcode: this.userlist.millcode,
        shift: this.generalservice.shiftid,
        shiftdate: this.generalservice.shiftdate,
        low_water_level_testing: "",
        water_gauge_class_testing: "",
        watergageglasspath: "",
        pressuregagesteampath: "",
        steamoutputpath: "",
        frequency: this.boilerperformanceentryForm.value.pick_bphour,
        blowdown: "",
        ashremoval: "",
        pressuregaugesteam: "",
        watergaugeglass: "",
        type: "1",
        outputsteam: "",
        sootblow: "",
      };

      this.service.boilerloghourly_insert(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          var areq = {
            userid: this.userlist.userId,
            departmentid: this.userlist.dept_id,
            millcode: this.userlist.millcode,
            shift: this.generalservice.shiftid,
            shiftdate: this.generalservice.shiftdate,
            boilerperformancefrequency: this.boilerperformanceentryForm.value
              .pick_bphour,
            boilerpressure: this.boilerperformanceentryForm.value
              .txt_boilerpressure,
            steamoutput: this.boilerperformanceentryForm.value.txt_steamoutput,
            boilerpressuresteamoutputpath: this.imagePaths
              .boilerpressuresteamoutputpath,

            boilerwaterlevel: this.boilerperformanceentryForm.value
              .txt_boilerwaterlevel,
            boilerwaterlevelpath: this.imagePaths.boilerwaterlevelpath,

            opacity: this.boilerperformanceentryForm.value.txt_opacity,
            concentration: this.boilerperformanceentryForm.value
              .txt_concentration,
            smokeanalysispath: this.imagePaths.smokeanalysispath,
            date: this.currentdate,
          };

          this.service.boilerperformance_insert(areq).then((result) => {
            var resultdata: any;
            resultdata = result;

            if (resultdata.httpcode == 200) {
              this.currenthour = this.boilerperformanceentryForm.value.pick_bphour;

              this.boilerperformanceentryForm.reset();

              this.boilerperformanceentryForm.controls.pick_bphour.setValue(
                this.currenthour
              );

              this.turbineperformanceentryForm.controls.pick_tphour.setValue(
                this.currenthour
              );

              this.imagePaths.boilerpressuresteamoutputpath = "";
              this.imagePaths.smokeanalysispath = "";

              this.tabs_segment = "TurbinePerformance";

              this.commonservice.presentToast(
                "Boiler Performance Inserted Successfully"
              );

              this.pageTop.scrollToTop();

              this.tabs_segment = "TurbinePerformance";
            } else {
              this.commonservice.presentToast(
                "Boiler Performance Insert Failed"
              );
            }
          });
        } else {
          this.commonservice.presentToast("Hourly Insert Failed");
        }
      });
    } else {
      this.commonservice.presentToast("Please Fill the Form");
    }
  }

  turbineperformance_save() {
    if (this.turbineperformanceentryForm.valid) {
      if (
        this.turbineperformanceentryForm.value.select_powerdistribution == 1
      ) {
        if (this.turbineperformanceentryForm.value.taReason == "") {
          this.commonservice.presentToast("Reason is Mandatory");
          return;
        }
      }

      var areq = {
        userid: this.userlist.userId,
        departmentid: this.userlist.dept_id,
        millcode: this.userlist.millcode,
        shift: this.generalservice.shiftid,
        shiftdate: this.generalservice.shiftdate,
        turbineperformancefrequency: this.turbineperformanceentryForm.value
          .pick_tphour,
        inletpressure: this.turbineperformanceentryForm.value.txt_inletpressure,

        nozzlepressure: this.turbineperformanceentryForm.value
          .txt_nozzlepressure,

        oilpressure: this.turbineperformanceentryForm.value.txt_oilpressure,

        powerconsumption: this.turbineperformanceentryForm.value
          .txt_powerconsumption,

        powerconsumptionpath: this.imagePaths.powerconsumptionpath,

        frequency: this.turbineperformanceentryForm.value.txt_frequency,

        frequencypath: this.imagePaths.frequencypath,

        powerdistribution: this.turbineperformanceentryForm.value
          .select_powerdistribution,

        powerdistributionpath: this.imagePaths.powerdistributionpath,

        remarks: this.turbineperformanceentryForm.value.taReason,
      };

      //console.log(areq);

      this.service.turbineperformance_insert(areq).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.turbineperformanceentryForm.reset();

          this.turbineperformanceentryForm.controls.pick_tphour.setValue(
            this.currenthour
          );

          this.imagePaths.powerconsumptionpath = "";
          this.imagePaths.frequencypath = "";
          this.imagePaths.powerdistributionpath = "";

          this.commonservice.presentToast(
            "Turbine Performance Inserted Successfully"
          );

          this.dismiss();
        } else {
          this.commonservice.presentToast("Turbine Performance Insert Failed");
        }
      });
    } else {
      this.commonservice.presentToast("Please Fill the Form");
    }
  }

  powerdistributionchange(event) {
    const eachitem = JSON.parse(event.target.value);
    if (eachitem == 1) {
      this.isCommentsenable = true;
    } else {
      this.isCommentsenable = false;
    }
  }

  segmentChanged(ev: any) {
    //console.log("Segment changed", ev.detail.value);

    if (ev.detail.value == "TurbinePerformance") {
      this.turbineperformanceentryForm.controls.pick_tphour.setValue(
        this.boilerperformanceentryForm.value.pick_bphour
      );

      this.getpowerdistributionList();
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
