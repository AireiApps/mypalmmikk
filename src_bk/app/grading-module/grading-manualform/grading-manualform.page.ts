import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import * as moment from "moment";
import { File } from "@ionic-native/file/ngx";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { GradingServiceService } from "src/app/services/grading-service/grading-service.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";

@Component({
  selector: "app-grading-manualform",
  templateUrl: "./grading-manualform.page.html",
  styleUrls: ["./grading-manualform.page.scss"],
})
export class GradingManualformPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  getSupplierDetails = JSON.parse(localStorage.getItem("supplierdetails"));

  todaydate = moment(new Date().toISOString()).format("YYYY-MM-DD");

  gradingForm;
  params;
  getSuppliername = "";
  supplierselected = false;
  vechicleList;
  ffb_transid = "";

  imagePaths = {
    ffb_path: "",
    ffb_src: "",
    lorry_path: "",
    lorry_src: "",
    other_path: "",
    other_src: "",
  };

  disableButton = false;

  constructor(
    private zone: NgZone,
    private httpservice: HttpserviceService,
    private gradingservice: GradingServiceService,
    private router: Router,
    private commonservice: AIREIService,
    private file: File,    
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public alertController: AlertController
  ) {
    let viewform = this.route.snapshot.paramMap.get("item");

    if (typeof viewform != "undefined" && viewform) {
      this.params = JSON.parse(viewform);
      this.getSuppliername = this.params.suppler_name;

      this.uienabledisable();
    }

    this.gradingForm = this.fb.group({
      txt_supplier: new FormControl(this.getSuppliername),
      select_vehicle: new FormControl(""),
      lorry_number: new FormControl(""),
      date: new FormControl(this.todaydate),
      year_planting: new FormControl("", Validators.required),
      bunch_weight: new FormControl("", Validators.required),
      big_bucket: new FormControl("", Validators.required),
      medium_bunches: new FormControl("", Validators.required),
      small_bunches: new FormControl("", Validators.required),
      under_ripe_bunches: new FormControl("", Validators.required),
      long_stalk: new FormControl("", Validators.required),
      loose_stalk: new FormControl("", Validators.required),
      rejected_bunches: new FormControl("", Validators.required),
      hard_bunches: new FormControl("", Validators.required),
      proposed_oer_deduction: new FormControl("", Validators.required),
      proposed_weight_deduction: new FormControl("", Validators.required),
      dirt: new FormControl(false),
      sand: new FormControl(false),
      notfresh: new FormControl(false),
      wet: new FormControl(false),
      dxd: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {}

  ionViewDidEnter() {}

  searchsupplier() {
    this.router.navigate(["/grading-suppliersearch"]);
  }

  getVehicle() {
    let req = {
      acc_id: this.params.acc_id,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.commonservice.getAllVechicleByID(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.vechicleList = resultdata.data;
      }
    });
  }

  uienabledisable() {
    //console.log(this.getSuppliername);

    if (this.getSuppliername.length > 0) {
      this.supplierselected = true;

      this.getVehicle();
    } else {
      this.supplierselected = false;
    }
  }

  // ImageUpload(type) {
  //   this.imgUpload.ffbCameraUpload().then(result => {
  //     var imgpath: String;
  //     imgpath = String(result);
  //     let filename = imgpath.substring(imgpath.lastIndexOf('/') + 1);
  //     let path = imgpath.substring(0, imgpath.lastIndexOf('/') + 1);

  //     const displayedImg = (<any>window).Ionic.WebView.convertFileSrc(imgpath);

  //     if (type == 'ffb')
  //     {
  //       this.imagePaths.ffb_src = displayedImg;
  //       this.imagePaths.ffb_path = String(result);
  //     }

  //     if (type == 'lorry')
  //     {
  //       this.imagePaths.lorry_src = displayedImg;
  //       this.imagePaths.lorry_path = String(result);
  //     }

  //     if (type == 'other')
  //     {
  //       this.imagePaths.other_src = displayedImg;
  //       this.imagePaths.other_path = String(result);
  //     }

  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  async confirmApproveVechicle() {
    if (
      this.gradingForm.value.select_vehicle == "" &&
      this.gradingForm.value.lorry_number == ""
    ) {
      this.commonservice.presentToast(
        "Either Vehicle (or) Lorry Number is Mandatory"
      );
    } else {
      if (this.gradingForm.valid) {
          const alert = await this.alertController.create({
            header: "Confirm!",
            message: "Supplier : " + this.params.suppler_name,
            buttons: [
              {
                text: "Cancel",
                role: "cancel",
                cssClass: "secondary",
                handler: (cancel) => {
                  console.log("Confirm Cancel");
                },
              },
              {
                text: "Okay",
                handler: () => {
                  this.save_ffb();
                  console.log("Confirm Okay");
                },
              },
            ],
          });

          await alert.present();
        
      } else {
        this.commonservice.presentToast("Please Fill the Form!");
      }
    }
  }

  save_ffb() {
    if (this.params.suppler_name == "") {
      this.commonservice.presentToast("Supplier Selection is Mandatory");
      return;
    }

    if (this.gradingForm.value.bunch_weight.length <= 0) {
      this.gradingForm.value.bunch_weight = Number(0.0).toPrecision(2);
    }

    if (this.gradingForm.value.big_bucket.length <= 0) {
      this.gradingForm.value.big_bucket = Number(0.0).toPrecision(2);
    }

    if (this.gradingForm.value.medium_bunches.length <= 0) {
      this.gradingForm.value.medium_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingForm.value.small_bunches.length <= 0) {
      this.gradingForm.value.small_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingForm.value.under_ripe_bunches.length <= 0) {
      this.gradingForm.value.under_ripe_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingForm.value.rejected_bunches.length <= 0) {
      this.gradingForm.value.rejected_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingForm.value.hard_bunches.length <= 0) {
      this.gradingForm.value.hard_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingForm.value.proposed_oer_deduction.length <= 0) {
      this.gradingForm.value.proposed_oer_deduction = Number(0.0).toPrecision(
        2
      );
    }

    if (this.gradingForm.value.proposed_weight_deduction.length <= 0) {
      this.gradingForm.value.proposed_weight_deduction = Number(
        0.0
      ).toPrecision(2);
    }

    if (this.gradingForm.value.long_stalk.length <= 0) {
      this.gradingForm.value.long_stalk = Number(0.0).toPrecision(2);
    }

    if (this.gradingForm.value.loose_stalk.length <= 0) {
      this.gradingForm.value.loose_stalk = Number(0.0).toPrecision(2);
    }

    var selectedvehicleid = 0;
    var selectedlorrynumber = "";

    if (this.gradingForm.value.select_vehicle == "") {
      selectedvehicleid = 0;
      selectedlorrynumber = this.gradingForm.value.lorry_number;
    } else {
      selectedvehicleid = JSON.parse(this.gradingForm.value.select_vehicle)
        .vehicle_det_id;
      selectedlorrynumber = JSON.parse(this.gradingForm.value.select_vehicle)
        .vehicle_no;
    }

    this.disableButton = true;

    var req = {
      date: this.todaydate,
      net_weight: 0,
      weighbridge_ticket_no: 0,
      professionalseal1: "",
      professionalseal2: "",
      professionalseal3: "",
      professionalseal4: "",
      professionalseal5: "",
      professionalseal6: "",
      vehicleid: selectedvehicleid,
      vehicleno: selectedlorrynumber,
      driverid: 0,
      acc_id: this.params.acc_id,
      millcode: this.userlist.millcode,
    };

    console.log(req);

    this.gradingservice.insertFFBDelivery(req).then(
      (result) => {
        var resultdata: any;
        resultdata = result;
        if (resultdata.httpcode == 200) {
          this.save_grading(resultdata.ffb_inserted_id);
        } else {
          this.commonservice.presentToast("FFB Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  save_grading(ffbtransid) {
    if (ffbtransid == "") {
      this.commonservice.presentToast("FFB Transaction Failed");
    }

    var selectedlorrynumber = "";

    if (this.gradingForm.value.select_vehicle == "") {
      selectedlorrynumber = this.gradingForm.value.lorry_number;
    } else {
      selectedlorrynumber = JSON.parse(this.gradingForm.value.select_vehicle)
        .vehicle_no;
    }

    var areq = {
      gradingdate: this.todaydate,
      suppliername: this.params.suppler_name,
      lorrynumber: selectedlorrynumber,
      yearofplanting: this.gradingForm.value.year_planting,
      avg_bunch_weight: this.gradingForm.value.bunch_weight,
      big_bunch_weight: this.gradingForm.value.big_bucket,
      medium_bunch_weight: this.gradingForm.value.medium_bunches,
      small_bunch_weight: this.gradingForm.value.small_bunches,
      under_ripe_bunch: this.gradingForm.value.under_ripe_bunches,
      otherfactors_id: 0,
      rejected_bunches: this.gradingForm.value.rejected_bunches,
      hard_bunches: this.gradingForm.value.hard_bunches,
      proposed_oer: this.gradingForm.value.proposed_oer_deduction,
      proposed_weight_deduction: this.gradingForm.value
        .proposed_weight_deduction,
      drivername: "",
      acc_id: this.params.acc_id,
      plan: this.userlist.plan,
      ffb_trans_id: ffbtransid,
      long_stalk: this.gradingForm.value.long_stalk,
      loose_stalk: this.gradingForm.value.loose_stalk,
      dirt: Number(this.gradingForm.value.dirt),
      sand: Number(this.gradingForm.value.sand),
      notfresh: Number(this.gradingForm.value.notfresh),
      wet: Number(this.gradingForm.value.wet),
      dxd: this.gradingForm.value.dxd,
      millcode: this.userlist.millcode,
      ffb_file: this.imagePaths.ffb_path,
      lorry_file: this.imagePaths.lorry_path,
      other_file: this.imagePaths.other_path,
    };

    console.log(areq);

    this.gradingservice.InsertGrading(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;
        if (resultdata.httpcode == 200) {
          this.disableButton = false;

          // this.gradingform.reset();

          this.gradingForm.reset();

          this.imagePaths.ffb_path = "";

          this.imagePaths.lorry_path = "";

          this.imagePaths.other_path = "";

          this.supplierselected = false;

          //this.commonservice.presentToast("Grading Added  !");

          this.confirmGrading();
        } else {
          this.disableButton = false;

          this.commonservice.presentToast("Grading Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async confirmGrading() {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "<strong>Grading</strong> Details Updated Successfully",
      backdropDismiss: false,
      buttons: [
        {
          text: "Okay",
          handler: () => {
            /*this.router.navigate(["/tabs/tabsgrading"]).then(() => {
              window.location.reload();
            });*/

            //console.log("Confirm Okay");

            this.router.navigate(["/tabs/tabsgrading"]);
          },
        },
      ],
    });

    await alert.present();
  }

  goback() {
    this.router.navigate(["/tabs/tabsgrading"]);
  }

  parseString(item) {
    return JSON.stringify(item);
  }
}
