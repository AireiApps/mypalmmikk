import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AIREIService } from '../../api/api.service';
import { File } from '@ionic-native/file/ngx';
import { HttpParams } from '@angular/common/http';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { appsettings } from 'src/app/appsettings';
import { ImageUploadService } from 'src/app/services/imageupload-service/imageupload';
import { EstatemanagerServiceService } from '../../services/estatemanager-service/estatemanager-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-emprofile',
  templateUrl: './emprofile.page.html',
  styleUrls: ['./emprofile.page.scss'],
})
export class EmprofilePage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  tabs_segment;
  profileForm;
  profileList;

  personForm;
  personList = [];

  imgePaths = {
    "ssmno_path": "",
    "mpob_path": "",
    "mspo_path": ""
  }

  constructor(private httpservice: HttpserviceService, private fb: FormBuilder, private imgUpload: ImageUploadService, public platform: Platform, private commonservice: AIREIService, private camera: Camera, private file: File, private filePath: FilePath, private service: AIREIService, public actionSheetCtrl: ActionSheetController, public emservice: EstatemanagerServiceService, public alertController: AlertController) {
    this.profileForm = this.fb.group({
      company_name: new FormControl("", Validators.required),
      company_code: new FormControl("", Validators.required),
      address1: new FormControl("", Validators.required),
      tel_no: new FormControl("", Validators.required),
      persm_charge: new FormControl("", Validators.required),
      land_heetarage: new FormControl("", Validators.required),
      mspocertified: new FormControl("", Validators.required)
    });

    this.personForm = this.fb.group({
      txt_personincharename: new FormControl("", Validators.required),
      txt_icnumber: new FormControl("", Validators.required),
      txt_handphonenumber: new FormControl("", Validators.required),
      txt_username: new FormControl("", Validators.required),
      txt_password: new FormControl("", Validators.required)
    });

    this.tabs_segment = "profile"
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {    
    this.getProfileDetail();
  }

  getProfileDetail() {
    let req = {
      "acc_id": this.userlist.accId,
      "millcode": this.userlist.millcode
    }

    this.service.getAllProfileID(req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.profileList = resultdata.data;
        console.log("profile" + JSON.stringify(this.profileList));

        this.profileForm.controls["company_name"].setValue(this.profileList.company_name);
        this.profileForm.controls["company_code"].setValue(this.profileList.company_code);
        this.profileForm.controls["address1"].setValue(this.profileList.address1);
        this.profileForm.controls["tel_no"].setValue(this.profileList.contactno);
        this.profileForm.controls["persm_charge"].setValue(this.profileList.contactperson);
        this.profileForm.controls["land_heetarage"].setValue(this.profileList.landarea);
        this.profileForm.controls["mspocertified"].setValue(String(this.profileList.mspocertified));
        this.imgePaths.ssmno_path = this.profileList.ssmNoFile;
        this.imgePaths.mpob_path = this.profileList.mpob_license_file;
        this.imgePaths.mspo_path = this.profileList.mspocertificate_file;
      }
    });
  }

  getUserDetail() {
    let req = {
      "acc_id": this.userlist.accId,
      "millcode": this.userlist.millcode
    }

    this.service.getUserList(req).then(result => {
      var resultdata: any;
      resultdata = result;
      console.log(resultdata.data);
      if (resultdata.httpcode == 200) {
        this.personList = resultdata.data;
      }
    });
  }

  btn_deleteuserAction(value) {
    let req = {
      "user_id": value.user_id,
      "millcode": this.userlist.millcode
    }

    console.log(req);

    this.emservice.deleteuser(req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        
        this.httpservice.getContactLogin();

        this.getUserDetail();

        this.service.presentToast("User Deleted successfully");

      } else {
        this.service.presentToast("User Deletion Failed");
      }
    });

  }

  btn_profilesave() {
    if (this.profileForm.valid) {

      let req = {
        "name": this.profileForm.value.company_name,
        "code": this.profileForm.value.company_code,
        "address1": this.profileForm.value.address1,
        "contactno": this.profileForm.value.tel_no,
        "contactperson": this.profileForm.value.persm_charge,
        "ssmno_file": this.imgePaths.ssmno_path,
        "ssmno": "123",
        "landarea": this.profileForm.value.land_heetarage,
        "mspocertified": Number(this.profileForm.value.mspocertified),
        "mspo_certified_no_file": this.imgePaths.mspo_path,
        "acc_id": this.userlist.accId,
        "long": 0.0,
        "mpob_no": "123",
        "mpobLicenseFile": this.imgePaths.mpob_path,
        "millcode": this.userlist.millcode
      }

      //this.service.presentToast(req);

      this.service.profileUpdateSave(req).then(result => {
        var resultdata: any;
        resultdata = result;
        // this.profileForm.reset();
        if (resultdata.httpcode == 200) {
          this.service.presentToast("Profile Update Successfully!");
        } else {
          this.service.presentToast("Profile Updation Failed!");
        }
      });
    } else {
      this.service.presentToast("Please fill Profile Form!");
    }
  }

  btn_personsave() {
    if (this.personForm.valid) {
      let req = {
        "millcode": this.userlist.millcode,
        "acc_id": this.userlist.accId,
        "loginname": this.personForm.value.txt_personincharename,
        "nric": this.personForm.value.txt_icnumber,
        "mobile_no": this.personForm.value.txt_handphonenumber,
        "username": this.personForm.value.txt_username,
        "password": this.personForm.value.txt_password
      }

      this.service.personinchargeSave(req).then(result => {
        var resultdata: any;
        resultdata = result;
        
        this.personForm.reset();

        if (resultdata.httpcode == 200) {
          this.service.presentToast("Person In-Charge Saved Successfully!");

          this.httpservice.getContactLogin();
          this.getUserDetail();

        } else {
          this.service.presentToast("Person In-Charge Saved Failed!");
        }
      });
    }else
    {
      this.service.presentToast("Please fill Person In-Charge Form!");
    }
  }

  async presentActionSheet(type) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.imgUpload.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, type).then(result => {
            var resultdata: any;
            resultdata = result;
            let column = resultdata.columnName;

            resultdata = JSON.parse(resultdata.response)
            if (resultdata.httpcode == 200) {
              if (column == "ssmNoFile") 
              {
                this.imgePaths.ssmno_path = resultdata.data.uploaded_path;
              }

              if (column == "mpobCertificateFile") 
              {
                this.imgePaths.mpob_path = resultdata.data.uploaded_path;
              }

              if (column == "mspoCertificateFile") 
              {
                this.imgePaths.mspo_path = resultdata.data.uploaded_path;
              }

              this.commonservice.presentToast(this.imgePaths.ssmno_path);

            }
            else {
              this.service.presentToast("Image Upload Failed");
            }

          }, (err) => {
            console.log(err);
          });

        }
      }, {
        text: 'Use Camera',
        handler: () => {
          this.imgUpload.openCamera(type).then(result => {
            var resultdata: any;
            resultdata = result;
            let column = resultdata.columnName;

            //this.commonservice.presentToast(column);

            resultdata = JSON.parse(resultdata.response)

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
            }
            else {
              this.service.presentToast("Image Upload Failed");
            }
          }, (err) => {
            console.log(err);
          });
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  segmentChanged(ev: any) 
  {
    if(ev.detail.value=='person')
    {
      this.getUserDetail();
    }
  }
}

