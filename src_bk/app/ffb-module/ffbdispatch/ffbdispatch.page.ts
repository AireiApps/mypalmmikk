import { Component, OnInit } from "@angular/core";
import { FfbServiceService } from "src/app/services/ffb-service/ffb-service.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "src/app/api/api.service";
import * as moment from "moment";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { File } from "@ionic-native/file/ngx";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Capacitor } from "@capacitor/core";
import { ModalController, Platform, AlertController } from "@ionic/angular";
import { HttpserviceService } from "../../services/httpservice/httpservice.service";

@Component({
  selector: "app-ffbdispatch",
  templateUrl: "./ffbdispatch.page.html",
  styleUrls: ["./ffbdispatch.page.scss"],
})
export class FfbdispatchPage implements OnInit {
  tabs_segment;

  ffbsaveform;
  vechicleList;
  driverList;

  checkplatform = "";

  todaydate = moment(new Date().toISOString()).format("YYYY-MM-DD");

  userlist = JSON.parse(localStorage.getItem("userlist"));

  imagePaths = {
    dispatchnote: "",
    dispatchnotesrc: "",
  };

  disableButton = false;

  constructor(
    public modalController: ModalController,
    private platform: Platform,
    private router: Router,
    private service: FfbServiceService,
    public dms: DomSanitizer,
    private sanitizer: DomSanitizer,
    private file: File,
    private imgUpload: ImageUploadService,
    private fb: FormBuilder,
    private commonservice: AIREIService,
    private alertController: AlertController,
    private httpservice: HttpserviceService
  ) {
    this.tabs_segment = "ffb_delivery";

    this.ffbsaveform = this.fb.group({
      date: new FormControl(this.todaydate, Validators.required),
      net_weight: new FormControl("", Validators.required),
      weighbridge_ticket_no: new FormControl("", Validators.required),
      professionalseal1: new FormControl(""),
      professionalseal2: new FormControl(""),
      professionalseal3: new FormControl(""),
      professionalseal4: new FormControl(""),
      professionalseal5: new FormControl(""),
      professionalseal6: new FormControl(""),
      vehicleid: new FormControl("", Validators.required),
      driverid: new FormControl("", Validators.required),
      declarationcheckbox: new FormControl(true),
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    /*if (this.platform.is("ios")) {
      this.checkplatform='ios';
    }else{
      this.checkplatform='android';
    }*/

    this.httpservice.getContactLogin();

    this.getAllVechicleByID();

    this.getAllDriverByID();
  }

  getAllDriverByID() {
    let req = {
      acc_id: this.userlist.accId,
      millcode: this.userlist.millcode,
    };
    this.commonservice.getAllDriverByID(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      console.log(resultdata.data);
      if (resultdata.httpcode == 200) {
        this.driverList = resultdata.data;
      }
    });
  }

  getAllVechicleByID() {
    let req = {
      acc_id: this.userlist.accId,
      millcode: this.userlist.millcode,
    };
    this.commonservice.getAllVechicleByID(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      console.log(resultdata.data);
      if (resultdata.httpcode == 200) {
        this.vechicleList = resultdata.data;
      }
    });
  }

  /*ffbImageUpload() {
    this.imgUpload.ffbCameraUpload().then(result => {
      var imgpath: String;
      imgpath = String(result);
      let filename = imgpath.substring(imgpath.lastIndexOf('/') + 1);
      let path = imgpath.substring(0, imgpath.lastIndexOf('/') + 1);
      
      
      //then use the method reasDataURL  btw. var_picture is ur image variable
      
      this.imagePaths.dispatchnote = String(result);

      const displayedImg = (<any>window).Ionic.WebView.convertFileSrc(imgpath);
      
      this.imagePaths.dispatchnotesrc = displayedImg;

      this.file.readAsDataURL(path, filename).then(res => {        
      });

    }, (err) => {
      console.log(err);
    });
  }*/

  ffbImageUpload(type) {
    this.httpservice.getContactLogin();

    var areq = type;

    this.imgUpload.ImageUploadSupervisor(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.dispatchnote = resultdata.data.uploaded_path;

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

  ffb_Save() {
    if (this.ffbsaveform.valid) {
      if (this.ffbsaveform.value.declarationcheckbox == true) {
        this.disableButton = true;

        this.httpservice.getContactLogin();

        var req = {
          date: this.ffbsaveform.value.date,
          net_weight: this.ffbsaveform.value.net_weight,
          weighbridge_ticket_no: this.ffbsaveform.value.weighbridge_ticket_no,
          professionalseal1: this.ffbsaveform.value.professionalseal1,
          professionalseal2: this.ffbsaveform.value.professionalseal2,
          professionalseal3: this.ffbsaveform.value.professionalseal3,
          professionalseal4: this.ffbsaveform.value.professionalseal4,
          professionalseal5: this.ffbsaveform.value.professionalseal5,
          professionalseal6: this.ffbsaveform.value.professionalseal6,
          vehicleid: this.ffbsaveform.value.vehicleid,
          vehicleno: "",
          driverid: this.ffbsaveform.value.driverid,
          acc_id: this.userlist.accId,
          dispatchnote: this.imagePaths.dispatchnote,
          millcode: this.userlist.millcode,
        };

        //console.log(req);

        /*if (this.imagePaths.dispatchnote != '') {
          this.imgUpload.ffbfileTransfer(req, this.imagePaths.dispatchnote).then(result => {
            var resultdata: any;
            resultdata = result;
            resultdata = JSON.parse(resultdata.response)

            if (resultdata.httpcode == 200) {
              this.imagePaths.dispatchnote = "";
              this.ffbsaveform.reset();

              this.commonservice.presentToast("FFB Added Successfully!");

              this.router.navigateByUrl('/tabs/tab1');
              
            } else {
              this.commonservice.presentToast("FFB Added Failed!");
            }
          }, (err) => {
            console.log(err);
          });

        } else {
          
          this.service.insertfbDelivery(req).then(result => {
            var resultdata: any;
            resultdata = result;
            resultdata = JSON.parse(resultdata.response)

            if (resultdata.httpcode == 200) {
              this.imagePaths.dispatchnote = "";
              this.ffbsaveform.reset();
              this.commonservice.presentToast("FFB Added Successfully!");

              //this.router.navigate(["/ffbdispatch"]);

              this.router.navigate('/tabs/tab1');

            } else {
              this.commonservice.presentToast("FFB Added Failed!");
            }
          }, (err) => {
            console.log(err);
          });

        }*/

        this.service.insertfbDelivery(req).then(
          (result) => {
            var resultdata: any;
            resultdata = result;
            //resultdata = JSON.parse(resultdata.response)

            if (resultdata.httpcode == 200) {
              this.imagePaths.dispatchnote = "";
              this.ffbsaveform.reset();

              //this.commonservice.presentToast("FFB Added Successfully!");

              this.disableButton = false;

              //this.router.navigate(["/tabs/tab1"]);

              this.confirmFFBDispatch();
            } else {
              this.disableButton = false;

              this.commonservice.presentToast("FFB Added Failed!");
            }
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.commonservice.presentToast("Please read and check the Checkbox");
      }
    } else {
      this.commonservice.presentToast("Please fill FFB Form!");
    }
  }

  async confirmFFBDispatch() {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "<strong>FFB</strong> send to driver",
      backdropDismiss: false,
      buttons: [
        {
          text: "Okay",
          handler: () => {
            this.router.navigate(["/tabs/tab1"]).then(() => {
              window.location.reload();
            });
            //console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {}

  display(b64: string) {
    return this.dms.bypassSecurityTrustUrl(b64);
  }

  gotohome() {
    this.router.navigate(["/tabs/tab1"]);

    /*Working
    this.router.navigate(['/tabs/tab1']).then(() => {
      window.location.reload();
    });*/
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
