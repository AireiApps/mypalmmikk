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
  selector: "app-boilerperformancedata",
  templateUrl: "./boilerperformancedata.page.html",
  styleUrls: ["./boilerperformancedata.page.scss"],
})
export class BoilerperformancedataPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY");
  monitoringdate = new Date().toISOString();

  boilerperformancedataForm;

  shiftid = "";
  shiftdate = "";
  getMonitoringDate;

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private httpservice: HttpserviceService,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private service: BoilerServiceService,
    private generalservice: GeneralserviceService
  ) {
    this.boilerperformancedataForm = this.fb.group({
      monitoringdate: new FormControl(this.monitoringdate),
      txt_pressure: new FormControl("", Validators.required),
      txt_flowrate: new FormControl("", Validators.required),
      txt_opacityorstackcondition: new FormControl("", Validators.required),
      //txt_otherparticals: new FormControl("", Validators.required),
      txt_smokeparticals: new FormControl("", Validators.required),
      txt_dischargehoppercondition: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  boilerperformancesave() {
    if (this.boilerperformancedataForm.valid) {
      this.getMonitoringDate = moment(
        this.boilerperformancedataForm.value.from_date
      ).format("YYYY-MM-DD");

      var req = {
        userid: this.userlist.userId,
        department_id: this.userlist.dept_id,
        millcode: this.userlist.millcode,
        shift: this.generalservice.shiftid,
        shiftdate: this.generalservice.shiftdate,
        date: this.getMonitoringDate,
        pressure: this.boilerperformancedataForm.value.txt_pressure,
        flow_rate: this.boilerperformancedataForm.value.txt_flowrate,
        opacityorstackcondition: this.boilerperformancedataForm.value
          .txt_opacityorstackcondition,
        smokeparticle: this.boilerperformancedataForm.value.txt_smokeparticals,
        otherparticle: "",
        dischargehoppercondition: this.boilerperformancedataForm.value
          .txt_dischargehoppercondition,
      };

      this.service.boilerperformance_insert(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {
          this.boilerperformancedataForm.reset();
          this.commonservice.presentToast(
            "Boiler Performance Inserted Successfully"
          );

          this.router.navigate(["/tabs/tabboiler"]);
        } else {
          this.commonservice.presentToast("Boiler Performance Insert Failed");
        }
      });
    } else {
      this.commonservice.presentToast("Please Fill the Form");
    }
  }
}
