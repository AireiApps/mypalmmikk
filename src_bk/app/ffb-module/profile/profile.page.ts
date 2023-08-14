import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AIREIService } from "../../api/api.service";
import { File } from "@ionic-native/file/ngx";
import { HttpParams } from "@angular/common/http";
import { ActionSheetController, Platform } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { appsettings } from "src/app/appsettings";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { FfbServiceService } from "src/app/services/ffb-service/ffb-service.service";
import { ModalController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  tabs_segment;
  mspostatus;
  profileForm;
  vechicleForm;
  driverForm;

  vechicleArr = [];
  vechicleList = [];
  profileList;

  driverList = [];

  imgePaths = {
    ssmno_path: "",
    mpob_path: "",
    mspo_path: "",
  };

  selectvehicle = {
    form: null,
  };

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder,
    private imgUpload: ImageUploadService,
    public platform: Platform,
    private commonservice: AIREIService,
    private camera: Camera,
    private file: File,
    private filePath: FilePath,
    private service: AIREIService,
    public actionSheetCtrl: ActionSheetController,
    public ffbservice: FfbServiceService,
    public alertController: AlertController
  ) {
    this.profileForm = this.fb.group({
      company_name: new FormControl("", Validators.required),
      company_code: new FormControl("", Validators.required),
      address1: new FormControl("", Validators.required),
      tel_no: new FormControl("", Validators.required),
      persm_charge: new FormControl("", Validators.required),
      land_heetarage: new FormControl("", Validators.required),
      mspocertified: new FormControl("", Validators.required),
    });

    this.vechicleForm = this.fb.group({
      vechicle: new FormControl("", Validators.required),
      vehiclenumber: new FormControl("", Validators.required),
    });

    this.driverForm = this.fb.group({
      drivername: new FormControl("", Validators.required),
      drivernric: new FormControl("", Validators.required),
      mobile_no: new FormControl("", Validators.required),
    });

    this.tabs_segment = "add_vechicle";
    this.mspostatus = "Mr";
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.selectvehicle.form = 1;
    this.getVechicle();
    //this.getAllVechicleByID();
    //this.getAllDriverByID();
    //this.getProfileDetail();
  }

  btn_deletevechicleAction(value) {
    let req = {
      vehicle_det_id: value.vehicle_det_id,
      millcode: this.userlist.millcode,
    };
    this.ffbservice.deletevechicle(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.getAllVechicleByID();
        this.service.presentToast("vechicle deleted successfully");
      } else {
        this.service.presentToast("vechicle not found");
      }
    });
  }

  btn_deletedriverAction(value) {
    let req = {
      driver_id: value.driver_id,
      millcode: this.userlist.millcode,
    };
    this.ffbservice.deletedriver(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.getAllDriverByID();
        this.service.presentToast("driver deleted successfully");
      } else {
        this.service.presentToast("driver not found");
      }
    });
  }

  getProfileDetail() {
    let req = {
      acc_id: this.userlist.accId,
      millcode: this.userlist.millcode,
    };
    this.service.getAllProfileID(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.profileList = resultdata.data;
        console.log("profile" + JSON.stringify(this.profileList));

        this.profileForm.controls["company_name"].setValue(
          this.profileList.company_name
        );
        this.profileForm.controls["company_code"].setValue(
          this.profileList.company_code
        );
        this.profileForm.controls["address1"].setValue(
          this.profileList.address1
        );
        this.profileForm.controls["tel_no"].setValue(
          this.profileList.contactno
        );
        this.profileForm.controls["persm_charge"].setValue(
          this.profileList.contactperson
        );
        this.profileForm.controls["land_heetarage"].setValue(
          this.profileList.landarea
        );
        if (this.profileList.mspocertified == 1) {
          this.profileForm.controls["mspocertified"].setValue("Certified");
        } else {
          this.profileForm.controls["mspocertified"].setValue("In Progress");
        }
        //this.profileForm.controls["mspocertified"].setValue(String(this.profileList.mspocertified));
        this.imgePaths.ssmno_path = this.profileList.ssmNoFile;
        this.imgePaths.mpob_path = this.profileList.mpob_license_file;
        this.imgePaths.mspo_path = this.profileList.mspocertificate_file;
      }
    });
  }

  async presentActionSheet(type) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Select Image Source",
      buttons: [
        {
          text: "Load from Library",
          handler: () => {
            this.imgUpload
              .takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, type)
              .then(
                (result) => {
                  var resultdata: any;
                  resultdata = result;
                  let column = resultdata.columnName;

                  resultdata = JSON.parse(resultdata.response);
                  if (resultdata.httpcode == 200) {
                    if (column == "ssmNoFile") {
                      this.imgePaths.ssmno_path = resultdata.data.uploaded_path;
                    }
                    if (column == "mpobCertificateFile") {
                      this.imgePaths.mpob_path = resultdata.data.uploaded_path;
                    }
                    if (column == "mspoCertificateFile") {
                      this.imgePaths.mspo_path = resultdata.data.uploaded_path;
                    }

                    this.commonservice.presentToast(this.imgePaths.mspo_path);
                  } else {
                    this.service.presentToast("Image Upload Failed");
                  }
                },
                (err) => {
                  console.log(err);
                }
              );
          },
        },
        {
          text: "Use Camera",
          handler: () => {
            this.imgUpload.openCamera(type).then(
              (result) => {
                var resultdata: any;
                resultdata = result;
                let column = resultdata.columnName;

                //this.commonservice.presentToast(column);

                resultdata = JSON.parse(resultdata.response);

                //this.commonservice.presentToast(resultdata);

                if (resultdata.httpcode == 200) {
                  if (column == "ssmNoFile") {
                    this.imgePaths.ssmno_path = resultdata.data.uploaded_path;
                  }
                  if (column == "mpobCertificateFile") {
                    this.imgePaths.mpob_path = resultdata.data.uploaded_path;
                  }
                  if (column == "mspoCertificateFile") {
                    this.imgePaths.mspo_path = resultdata.data.uploaded_path;
                  }
                } else {
                  this.service.presentToast("Image Upload Failed");
                }
              },
              (err) => {
                console.log(err);
              }
            );
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }

  getAllVechicleByID() {
    let req = {
      acc_id: this.userlist.accId,
      millcode: this.userlist.millcode,
    };
    this.service.getAllVechicleByID(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      console.log(resultdata.data);
      if (resultdata.httpcode == 200) {
        this.vechicleList = resultdata.data;
        this.getAllDriverByID();
      } else {
        this.getAllDriverByID();
      }
    });
  }

  getAllDriverByID() {
    let req = {
      acc_id: this.userlist.accId,
      millcode: this.userlist.millcode,
    };
    this.service.getAllDriverByID(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      console.log(resultdata.data);
      if (resultdata.httpcode == 200) {
        this.driverList = resultdata.data;
        this.getProfileDetail();
      } else {
        this.getProfileDetail();
      }
    });
  }

  getVechicle() {
    let req = {
      millcode: this.userlist.millcode,
    };

    this.service.getVechicleList(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.vechicleArr = resultdata.data;
        this.getAllVechicleByID();
      } else {
        this.getAllVechicleByID();
      }
    });
  }

  btn_profilesave() {
    if (this.profileForm.valid) {
      let req = {
        name: this.profileForm.value.company_name,
        code: this.profileForm.value.company_code,
        address1: this.profileForm.value.address1,
        contactno: this.profileForm.value.tel_no,
        contactperson: this.profileForm.value.persm_charge,
        ssmno_file: this.imgePaths.ssmno_path,
        ssmno: "123",
        landarea: this.profileForm.value.land_heetarage,
        mspocertified: Number(this.profileForm.value.mspocertified),
        mspo_certified_no_file: this.imgePaths.mspo_path,
        acc_id: this.userlist.accId,
        long: 0.0,
        mpob_no: "123",
        "mpobLicenseFile ": this.imgePaths.mpob_path,
        millcode: this.userlist.millcode,
      };

      //this.service.presentToast(req);

      this.service.profileUpdateSave(req).then((result) => {
        var resultdata: any;
        resultdata = result;
        // this.profileForm.reset();
        if (resultdata.httpcode == 200) {
          this.service.presentToast("Profile Update Successfully!");
        } else {
          this.service.presentToast("Profile Saved Failed!");
        }
      });
    } else {
      this.service.presentToast("Please fill profile form!");
    }
  }

  btn_driversave() {
    if (this.driverForm.valid) {
      let driverusername = "";

      driverusername = this.driverForm.value.drivernric;

      let req = {
        drivername: this.driverForm.value.drivername,
        drivernric: this.driverForm.value.drivernric,
        mobile_no: this.driverForm.value.mobile_no,
        acc_id: this.userlist.accId,
        millcode: this.userlist.millcode,
      };

      this.service.driverSave(req).then((result) => {
        var resultdata: any;
        resultdata = result;

        this.driverForm.reset();

        if (resultdata.httpcode == 200) {
          this.showcredentials(driverusername);

          this.service.presentToast("Vechicle Saved Successfully!");
        } else {
          this.service.presentToast("Vechicle Saved Failed!");
        }
      });
    } else {
      this.service.presentToast("Please fill driver form!");
    }
  }

  async showcredentials(value) {
    const alert = await this.alertController.create({
      header: "Credentials",
      message: "Username: " + value + "<br/>Password: dollar1",
      buttons: [
        {
          text: "Okay",
          handler: () => {
            this.getAllDriverByID();
          },
        },
      ],
    });

    await alert.present();
  }

  btn_vechiclesave() {
    if (this.vechicleForm.valid) {
      let req = {
        vehiclenumber: this.vechicleForm.value.vehiclenumber,
        vehicle_id: this.vechicleForm.value.vechicle,
        acc_id: this.userlist.accId,
        millcode: this.userlist.millcode,
      };

      this.service.vechicleSave(req).then((result) => {
        var resultdata: any;
        resultdata = result;
        this.vechicleForm.reset();
        if (resultdata.httpcode == 200) {
          this.service.presentToast("Vechicle Saved Successfully!");
        } else {
          this.service.presentToast("Vechicle Saved Failed!");
        }
      });
    } else {
      this.service.presentToast("Please fill vechicle form!");
    }
  }

  ngOnInit() {}
  segmentChanged(ev: any) {
    console.log("Segment changed", ev);
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
