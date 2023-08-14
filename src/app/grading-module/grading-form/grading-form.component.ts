import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { DatePicker } from "@ionic-native/date-picker/ngx";
import { AuthGuardService } from "src/app/services/authguard/auth-guard.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { File } from "@ionic-native/file/ngx";
import { GradingServiceService } from "src/app/services/grading-service/grading-service.service";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-grading-form",
  templateUrl: "./grading-form.component.html",
  styleUrls: ["./grading-form.component.scss"],
})
export class GradingFormComponent implements OnInit {
  today = new Date().toISOString();
  gradingform;
  todaydate = moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss");
  userlist = JSON.parse(localStorage.getItem("userlist"));
  imagePaths = {
    ffb_path: "",
    ffb_src: "",
    lorry_path: "",
    lorry_src: "",
    other_path: "",
    other_src: "",
  };

  disableButton = false;

  gradingValue;
  otherfactorArr = [];

  constructor(
    private datePicker: DatePicker,
    public alertController: AlertController,
    private gradingservice: GradingServiceService,
    private route: ActivatedRoute,
    private notifi: AuthGuardService,
    private router: Router,
    private commonservice: AIREIService,
    private file: File,
    private fb: FormBuilder,
    private httpservice: HttpserviceService
  ) {
    let gradform = this.route.snapshot.paramMap.get("item");
    this.gradingValue = JSON.parse(gradform);

    console.log(this.gradingValue);
    this.gradingform = this.fb.group({
      supplier_name: new FormControl(this.gradingValue.supplier_name),
      lorry_no: new FormControl(this.gradingValue.vehicle_no),
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
      //net_weight: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    //this.getOtherFactor();
  }

  ionViewDidEnter() {
    //this.getOtherFactor();
  }

  /*getOtherFactor() {
    const req = {
    };

    this.gradingservice.getOtherFactor(req).then(result => {
      let resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.otherfactorArr = resultdata.data;
      }
    });
  }*/

  datepickAction() {
    this.datePicker
      .show({
        date: new Date(),
        mode: "date",
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      })
      .then(
        (date) => console.log("Got date: ", date),
        (err) => console.log("Error occurred while getting date: ", err)
      );
  }

  /*ImageUpload(type) {
    this.imgUpload.ffbCameraUpload().then(result => {
      var imgpath: String;
      imgpath = String(result);
      let filename = imgpath.substring(imgpath.lastIndexOf('/') + 1);
      let path = imgpath.substring(0, imgpath.lastIndexOf('/') + 1);


      //then use the method reasDataURL  btw. var_picture is ur image variable
      const displayedImg = (<any>window).Ionic.WebView.convertFileSrc(imgpath);

      if (type == 'ffb') {
        this.imagePaths.ffb_src = displayedImg;
        this.imagePaths.ffb_path = String(result);
      }
      if (type == 'lorry') {
        this.imagePaths.lorry_src = displayedImg;
        this.imagePaths.lorry_path = String(result);
      }
      if (type == 'other') {
        this.imagePaths.other_src = displayedImg;
        this.imagePaths.other_path = String(result);

      }

    }, (err) => {
      console.log(err);
    });
  }*/

  async confirmApproveVechicle() {
    /* Commented on 03.09.2020 Suresh Kumar K due to remove mandatory of images
    if (this.gradingform.valid) {
      if (this.imagePaths.ffb_path != "" && this.imagePaths.lorry_path != "" && this.imagePaths.other_path != "") {
        const alert = await this.alertController.create({
          header: 'Confirm!',
          message: 'Vehicle No: ' + this.gradingValue.vehicle_no,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (cancel) => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'Okay',
              handler: () => {
                this.save_grading();
                console.log('Confirm Okay');
              }
            }
          ]
        });

        await alert.present();
      } else {
        this.commonservice.presentToast('Pls Capture Image!')

      }


    } else {
      this.commonservice.presentToast('Pls Fill the Form!')
    }*/
    if (this.gradingform.valid) {
        const alert = await this.alertController.create({
          header: "Confirm!",
          message: "Vehicle No: " + this.gradingValue.vehicle_no,
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
                this.save_grading();
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

  save_grading() {

    this.disableButton = true;

    if (this.gradingform.value.bunch_weight.length <= 0) {
      this.gradingform.value.bunch_weight = Number(0.0).toPrecision(2);
    }

    if (this.gradingform.value.big_bucket.length <= 0) {
      this.gradingform.value.big_bucket = Number(0.0).toPrecision(2);
    }

    if (this.gradingform.value.medium_bunches.length <= 0) {
      this.gradingform.value.medium_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingform.value.small_bunches.length <= 0) {
      this.gradingform.value.small_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingform.value.under_ripe_bunches.length <= 0) {
      this.gradingform.value.under_ripe_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingform.value.rejected_bunches.length <= 0) {
      this.gradingform.value.rejected_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingform.value.hard_bunches.length <= 0) {
      this.gradingform.value.hard_bunches = Number(0.0).toPrecision(2);
    }

    if (this.gradingform.value.proposed_oer_deduction.length <= 0) {
      this.gradingform.value.proposed_oer_deduction = Number(0.0).toPrecision(
        2
      );
    }

    if (this.gradingform.value.proposed_weight_deduction.length <= 0) {
      this.gradingform.value.proposed_weight_deduction = Number(
        0.0
      ).toPrecision(2);
    }

    if (this.gradingform.value.long_stalk.length <= 0) {
      this.gradingform.value.long_stalk = Number(0.0).toPrecision(2);
    }

    if (this.gradingform.value.loose_stalk.length <= 0) {
      this.gradingform.value.loose_stalk = Number(0.0).toPrecision(2);
    }

    var req = {
      gradingdate: this.todaydate,
      suppliername: this.gradingform.value.supplier_name,
      lorrynumber: this.gradingform.value.lorry_no,
      yearofplanting: this.gradingform.value.year_planting,
      avg_bunch_weight: this.gradingform.value.bunch_weight,
      big_bunch_weight: this.gradingform.value.big_bucket,
      medium_bunch_weight: this.gradingform.value.medium_bunches,
      small_bunch_weight: this.gradingform.value.small_bunches,
      under_ripe_bunch: this.gradingform.value.under_ripe_bunches,
      otherfactors_id: 0,
      rejected_bunches: this.gradingform.value.rejected_bunches,
      hard_bunches: this.gradingform.value.hard_bunches,
      proposed_oer: this.gradingform.value.proposed_oer_deduction,
      proposed_weight_deduction: this.gradingform.value
        .proposed_weight_deduction,
      drivername: this.gradingValue.driver_name,
      acc_id: this.gradingValue.acc_id,
      plan: this.userlist.plan,
      ffb_trans_id: this.gradingValue.ffb_trans_id,
      long_stalk: this.gradingform.value.long_stalk,
      loose_stalk: this.gradingform.value.loose_stalk,
      dirt: Number(this.gradingform.value.dirt),
      sand: Number(this.gradingform.value.sand),
      notfresh: Number(this.gradingform.value.notfresh),
      wet: Number(this.gradingform.value.wet),
      dxd: this.gradingform.value.dxd,
      millcode: this.userlist.millcode,
      ffb_file: this.imagePaths.ffb_path,
      lorry_file: this.imagePaths.lorry_path,
      other_file: this.imagePaths.other_path,

      //net_weight: this.gradingform.value.net_weight
    };

    //console.log(req);

    this.gradingservice.InsertGrading(req).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        if (resultdata.httpcode == 200) {

          this.disableButton = false;

          this.imagePaths.ffb_path = "";
          this.imagePaths.lorry_path = "";
          this.imagePaths.other_path = "";

          this.gradingform.reset();

          //this.commonservice.presentToast("Grading Added Successfully!");

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

    // this.imgUpload.gradingfileTransfer(req, this.imagePaths.img_path).then(result => {
    //   var resultdata: any;
    //   resultdata = result;
    //   resultdata = JSON.parse(resultdata.response)

    //   if (resultdata.httpcode == 200) {
    //     this.imagePaths.img_path = "";
    //     this.gradingform.reset();

    //     this.commonservice.presentToast("Grading Added Successfully!");
    //   } else {
    //     this.commonservice.presentToast("Grading Added Failed!");
    //   }
    // }, (err) => {
    //   console.log(err);
    // });
  }

  parseString(item) {
    return JSON.stringify(item);
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
            /*this.router.navigate(['/tabs/tabsgrading']).then(() => {
              window.location.reload();
            });*/
            //console.log("Confirm Okay");

            this.router.navigate(["/gradinghome"]);
          },
        },
      ],
    });

    await alert.present();
  }
}
