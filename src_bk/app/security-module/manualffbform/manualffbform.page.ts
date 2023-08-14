import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { ImageUploadService } from 'src/app/services/imageupload-service/imageupload';
import { File } from '@ionic-native/file/ngx';
import { AIREIService } from 'src/app/api/api.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';

@Component({
  selector: 'app-manualffbform',
  templateUrl: './manualffbform.page.html',
  styleUrls: ['./manualffbform.page.scss'],
})
export class ManualffbformPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  
  getSuppliername=''; 
  supplierselected=false;
  vechicleList;
  ffbForm;
  todaydate = moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss");
  params;
  imagePaths = {
    "ffbpath": "",
    "ffbsrc": ""
  }

  disableButton=false;

  constructor(private httpservice: HttpserviceService, private router: Router, private route: ActivatedRoute, public alertController: AlertController, private file: File, private fb: FormBuilder, private commonservice: AIREIService, private imgUpload: ImageUploadService, private service: SecurityServiceService) { 
    
    let viewform = this.route.snapshot.paramMap.get("item")    

    if(typeof viewform!='undefined' && viewform)
    {
      this.params = JSON.parse(viewform);
      this.getSuppliername = this.params.suppler_name;

      this.uienabledisable();
    }

    this.ffbForm = this.fb.group({
      txt_supplier: new FormControl(this.getSuppliername),
      txt_vehicle: new FormControl('', Validators.required),
      status: new FormControl("approved", Validators.required),      
      timein: new FormControl(this.todaydate, Validators.required),
      tacomments: new FormControl('')
    });
  }

  ngOnInit() {
  }

  searchsupplier()
  {
    this.router.navigate(["/suppliersearch"]);
  }

  getVehicle() {
    let req = {
      "acc_id": this.params.acc_id,
      "millcode": this.userlist.millcode
    }

    //console.log(req);

    this.commonservice.getAllVechicleByID(req).then(result => {
      var resultdata: any;
      resultdata = result;
      //console.log(resultdata.data);

      if (resultdata.httpcode == 200) {
        this.vechicleList = resultdata.data;
      }
    });
  }

  async confirmApproveVechicle() {
    if (this.ffbForm.valid) {

      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Supplier : ' + this.params.suppler_name,
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
              this.saveffb();
              console.log('Confirm Okay');
            }
          }
        ]
      });

      await alert.present();
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

  saveffb() 
  {
    if(this.params.suppler_name == "")
    {
      this.commonservice.presentToast('Supplier Selection is Mandatory')
    }

    if(this.ffbForm.value.select_vehicle == "")
    {
      this.commonservice.presentToast('Vehicle Selection is Mandatory')
    }

    if (this.ffbForm.valid) {

      this.disableButton=true;
        
      this.httpservice.getContactLogin();

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
        vehicleid: 0,
        vehicleno: this.ffbForm.value.txt_vehicle,
        driverid: 0,
        dispatchnote: "",
        acc_id: this.params.acc_id,
        millcode: this.userlist.millcode
      };

      this.service.insertFFBDelivery(req).then(result => {
        var resultdata: any;
        resultdata = result;
  
        if (resultdata.httpcode == 200) {

          this.httpservice.getContactLogin();

          this.approve(resultdata.ffb_inserted_id);
  
        } else {
          this.commonservice.presentToast("FFB Added Failed!");
        }
  
      }, (err) => {
        console.log(err);
      });

    } 
    else 
    {
      this.commonservice.presentToast('Please Capture Image')
    }
    
  }

  approve(ffbtransid)
  {
    if(ffbtransid == "")
    {
      this.commonservice.presentToast('FFB Transaction Failed')
    }

    var areq = {
      millcode: this.userlist.millcode,
      datetime: this.todaydate,
      drivername: '',
      drivernric: '-',
      mobile_no: "9999999999",
      ffb_trans_id: ffbtransid,
      comments: this.ffbForm.value.tacomments,
      vehicleno: this.ffbForm.value.txt_vehicle,
      acc_name: this.params.suppler_name,
      vehicle_no_file: this.imagePaths.ffbpath
    };

    /*this.imgUpload.ffbSecurityCheckApprove(areq, this.imagePaths.ffbpath).then(result => {
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

    this.service.saveSecurityApproval(areq).then(result => {
      var resultdata: any;
      resultdata = result;
      //resultdata = JSON.parse(resultdata.response)

      if (resultdata.httpcode == 200) {
        this.imagePaths.ffbpath = "";
        this.ffbForm.reset();
        
        this.disableButton=false;

        //this.commonservice.presentToast("FFB SecurityCheck Successfully!");

        this.confirmFFBSecurityCheck();

        //this.router.navigate(['/tabs/tabsecurity']);

      } else {
        this.commonservice.presentToast("FFB SecurityCheck Failed!");
      }
    }, (err) => {
      console.log(err);
    });
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
            /*this.router.navigate(['/tabs/tabsecurity']).then(() => {
              window.location.reload();
            });*/
            this.router.navigate(['/ffbreceive']);
            //console.log("Confirm Okay");
          },
        }
      ],
      
    });

    await alert.present();
  }

  uienabledisable()
  {
    //console.log(this.getSuppliername);

    if(this.getSuppliername.length>0)
    {      
      this.supplierselected = true;
            
      this.getVehicle();

    }else{
      this.supplierselected = false;
    }
  }

  /*To Type only Alphanumeric Characters*/
  eventHandler(event: any) 
  {
   let k;  
   k = event.charCode;
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
  }

  back()
  {
    this.router.navigate(["/ffbreceive"]);
  }
}
