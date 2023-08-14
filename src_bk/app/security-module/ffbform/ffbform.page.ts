import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { ImageUploadService } from 'src/app/services/imageupload-service/imageupload';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';
import { File } from '@ionic-native/file/ngx';
import { AIREIService } from 'src/app/api/api.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpserviceService } from "../../services/httpservice/httpservice.service";

@Component({
  selector: 'app-ffbform',
  templateUrl: './ffbform.page.html',
  styleUrls: ['./ffbform.page.scss'],
})
export class FfbformPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  
  getffbValue;
  ffbForm;
  todaydate = moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")
  imagePaths = {
    "ffbpath": "",
    "ffbsrc": ""
  }

  disableButton=false;

  constructor(private router: Router, private route: ActivatedRoute, public alertController: AlertController, private file: File, private fb: FormBuilder, private commonservice: AIREIService, private imgUpload: ImageUploadService, private service: SecurityServiceService, private httpservice: HttpserviceService) {


    let ffbval = this.route.snapshot.paramMap.get("item");
    this.getffbValue = JSON.parse(ffbval)
    console.log(this.getffbValue);
    this.ffbForm = this.fb.group({
      supplier_name: new FormControl(this.getffbValue.company_name, Validators.required),
      status: new FormControl("approved", Validators.required),
      driver_name: new FormControl(this.getffbValue.driver_name, Validators.required),
      driver_nric: new FormControl(this.getffbValue.driver_nric, Validators.required),
      driver_vehicleno: new FormControl(this.getffbValue.vehicle_no, Validators.required),
      timein: new FormControl(this.todaydate, Validators.required),
      tacomments: new FormControl('')
    });

  }

  ngOnInit() {
  }

  async confirmApproveVechicle() {
    if (this.ffbForm.valid && this.imagePaths.ffbpath != "") {

      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Vehicle No: ' + this.getffbValue.vehicle_no,
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
              this.approve();
              console.log('Confirm Okay');
            }
          }
        ]
      });

      await alert.present();

    } else {
      this.commonservice.presentToast('Please Capture the Image')
    }

  }


  // ffbImageUpload() {
  //   this.imgUpload.ffbCameraUpload().then(result => {
  //     var imgpath: String;
  //     imgpath = String(result);

  //     console.log(imgpath);

  //     let filename = imgpath.substring(imgpath.lastIndexOf('/') + 1);
  //     let path = imgpath.substring(0, imgpath.lastIndexOf('/') + 1);
  //     //then use the method reasDataURL  btw. var_picture is ur image variable
  //     this.imagePaths.ffbpath = String(result);
  //     const displayedImg = (<any>window).Ionic.WebView.convertFileSrc(imgpath);
  //     this.imagePaths.ffbsrc = displayedImg;

  //     // this.file.readAsDataURL(path, filename).then(res => {

  //     // });


  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  ffbImageUpload(type)
  {
    var areq = type;

    this.imgUpload.ImageUploadSupervisor(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {

          this.imagePaths.ffbpath = resultdata.data.uploaded_path;

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

  approve() {

    if (this.ffbForm.valid && this.imagePaths.ffbpath != "") {

      this.disableButton=true;
        
      this.httpservice.getContactLogin();

      var req = {
        millcode: this.userlist.millcode,
        datetime: this.ffbForm.value.timein,
        drivername: this.ffbForm.value.driver_name,
        drivernric: this.ffbForm.value.driver_nric,
        mobile_no: "9999999999",
        ffb_trans_id: this.getffbValue.ffbTrans_Id,
        comments: this.ffbForm.value.tacomments,
        vehicle_no_file: this.imagePaths.ffbpath
      };

      /*this.imgUpload.ffbSecurityCheckApprove(req, this.imagePaths.ffbpath).then(result => {
        var resultdata: any;
        resultdata = result;
        resultdata = JSON.parse(resultdata.response)

        if (resultdata.httpcode == 200) {
          this.commonservice.presentToast("FFB SecurityCheck Successfully!");

          this.router.navigate(['/tabs/tabsecurity']);
                    
        } else {
          this.commonservice.presentToast("FFB SecurityCheck Failed!");
        }
      }, (err) => {
        console.log(err);
      });*/

      this.service.saveSecurityApproval(req).then(result => {
        var resultdata: any;
        resultdata = result;
        //resultdata = JSON.parse(resultdata.response)

        if (resultdata.httpcode == 200) {          

          this.imagePaths.ffbpath = "";
          this.ffbForm.reset();

          this.disableButton=false;
          
          //this.commonservice.presentToast("FFB SecurityCheck Successfully!");

          //this.router.navigate(['/tabs/tabsecurity']);

          this.confirmFFBSecurityCheck();

        } else {

          this.disableButton=false;

          this.commonservice.presentToast("FFB SecurityCheck Failed!");
        }
      }, (err) => {
        console.log(err);
      });

    } else {
      this.commonservice.presentToast('Please Capture the Image!')
    }
  }

  async confirmFFBSecurityCheck() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: '<strong>FFB</strong> Security Checked Successfully',
      backdropDismiss: false,
      buttons: [
        {
          text: "Okay",
          handler: () => {
            this.router.navigate(['/ffbreceive']);
            /*this.router.navigate(['/tabs/tabsecurity']).then(() => {
              window.location.reload();
            });*/
            //console.log("Confirm Okay");
          },
        }
      ],
      
    });

    await alert.present();
  }
}
