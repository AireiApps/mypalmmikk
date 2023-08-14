import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { BoilerServiceService } from "src/app/services/boiler-service/boiler-service.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import * as moment from "moment";

import { GeneralserviceService } from "src/app/services/generalservice/generalservice.service";

@Component({
  selector: "app-turbineperformance",
  templateUrl: "./turbineperformance.page.html",
  styleUrls: ["./turbineperformance.page.scss"],
})
export class TurbineperformancePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");
  currenthour = moment(new Date().toISOString()).format("HH:00");

  turbineperformanceForm;

  imagePaths = {
    boilerpressure_path: "",
    kw_path: "",
    hz_path: "",
  };

  shiftid = "";
  shiftdate = "";

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private httpservice: HttpserviceService,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: BoilerServiceService,
    private imgUpload: ImageUploadService,
    private generalservice: GeneralserviceService
  ) {
    this.turbineperformanceForm = this.fb.group({
      pickhour: new FormControl(this.currenthour),
      txt_boiler_pressure: new FormControl("", Validators.required),
      txt_steamfloatatboiler: new FormControl("", Validators.required),
      txt_steamfloatatturbine: new FormControl("", Validators.required),
      txt_inlet: new FormControl("", Validators.required),
      txt_nozzle: new FormControl("", Validators.required),
      select_oilpress: new FormControl("", Validators.required),
      txt_KW: new FormControl("", Validators.required),
      txt_Hz: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ImageUpload(type) {
    this.imgUpload.ImageUploadBoiler(type).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          if (type == "BoilerPressure") {
            this.imagePaths.boilerpressure_path = resultdata.data.uploaded_path;
          }

          if (type == "KW") {
            this.imagePaths.kw_path = resultdata.data.uploaded_path;
          }

          if (type == "Hz") {
            this.imagePaths.hz_path = resultdata.data.uploaded_path;
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

  turbineperformancesave() {
    if (this.turbineperformanceForm.valid) {
      var req = {
        userid: this.userlist.userId,
        department_id: this.userlist.dept_id,
        millcode: this.userlist.millcode,
        shift: this.generalservice.shiftid,
        shiftdate: this.generalservice.shiftdate,
        boiler_pressure: this.turbineperformanceForm.value.txt_boiler_pressure,
        boiler_pressure_image: this.imagePaths.boilerpressure_path,
        steam_flow_at_boiler: this.turbineperformanceForm.value
          .txt_steamfloatatboiler,
        steam_flow_at_turbine: this.turbineperformanceForm.value
          .txt_steamfloatatturbine,
        turbine_pressure_inlet: this.turbineperformanceForm.value.txt_inlet,
        turbine_pressure_nozzle: this.turbineperformanceForm.value.txt_nozzle,
        oil_pressure: this.turbineperformanceForm.value.select_oilpress,
        kw: this.turbineperformanceForm.value.txt_KW,
        kw_image: this.imagePaths.kw_path,
        hz: this.turbineperformanceForm.value.txt_Hz,
        hz_image: this.imagePaths.hz_path,
        frequency: this.turbineperformanceForm.value.pickhour,
      };

      this.service.turbineperformance_insert(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.turbineperformanceForm.reset();
          this.commonservice.presentToast(
            "Turbine Performance Inserted Successfully"
          );

          this.router.navigate(["/tabs/tabboiler"]);
        } else {
          this.commonservice.presentToast("Turbine Performance Insert Failed");
        }
      });
    } else {
      this.commonservice.presentToast("Please Fill the Form");
    }
  }
}
