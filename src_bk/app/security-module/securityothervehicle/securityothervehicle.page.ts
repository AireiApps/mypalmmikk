import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ImageUploadService } from 'src/app/services/imageupload-service/imageupload';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-securityothervehicle',
  templateUrl: './securityothervehicle.page.html',
  styleUrls: ['./securityothervehicle.page.scss'],
})
export class SecurityothervehiclePage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  imagePaths = {
    vehicle_path: "",
  };

  vehicleForm;
  getAccid=0;
  getSuppliername='';
  getCustomertype='';
  supplierselected=false;
  params;
  todaydate = moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss")

  disableButton=false;
  type_status = '0';

  constructor(private httpservice: HttpserviceService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private commonservice: AIREIService, private imgUpload: ImageUploadService, private service: SecurityServiceService, private alertController: AlertController) {
    
    let viewform = this.route.snapshot.paramMap.get("item")    

    if(typeof viewform!='undefined' && viewform)
    {
      this.params = JSON.parse(viewform);
      this.getAccid = this.params.acc_id;
      this.getSuppliername = this.params.suppler_name;
      this.getCustomertype = this.params.type_name;

      this.uienabledisable();
    }
        
    this.vehicleForm = this.fb.group({
      //toggle_status: new FormControl(false),
      type: new FormControl("", Validators.required),
      txt_supplier: new FormControl(this.getSuppliername),
      txt_customertype: new FormControl(this.getCustomertype),
      txt_drivername: new FormControl('', Validators.required),
      txt_icnumber: new FormControl('', Validators.required),
      txt_vehiclenumber: new FormControl('', Validators.required),
      taComments: new FormControl('')
    });
   }

  ngOnInit() {
  }

  uienabledisable()
  {
    if(this.getSuppliername.length>0)
    {      
      this.supplierselected = true;                  
    }else{
      this.supplierselected = false;
    }
  }

  searchsupplier()
  {
    this.router.navigate(["/othersuppliersearch"]);
  }

  ImageUpload() {     
    var areq = "othervehicleentry";
    this.imgUpload.ImageUploadSupervisor(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
    
          this.imagePaths.vehicle_path = resultdata.data.uploaded_path;
          
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

  btn_save()
  {  
    //console.log(this.vehicleForm.value.toggle_status);    

    if (this.vehicleForm.valid) 
    {
        /*let getstatus = 0;

        if(this.vehicleForm.value.toggle_status==true)
        {
          getstatus = 1;
        }*/

        this.disableButton=true;

        var req = {
          userid: this.userlist.userId,
          millcode: this.userlist.millcode,
          acc_id: this.getAccid,
          status: Number(this.vehicleForm.value.type),
          drivername : this.vehicleForm.value.txt_drivername,
          drivernric : this.vehicleForm.value.txt_icnumber,
          vehiclenumber : this.vehicleForm.value.txt_vehiclenumber,
          datetime : this.todaydate,
          comments : this.vehicleForm.value.taComments,
          vehicle_no_file : this.imagePaths.vehicle_path        
        };

        //console.log(req);

        this.service.saveOtherVehicle(req).then((result) => {
          var resultdata: any;
          resultdata = result;
          if (resultdata.httpcode == 200) {

            this.vehicleForm.reset();
            
            this.imagePaths.vehicle_path='';

            this.disableButton=false;
            
            //this.commonservice.presentToast("Vehicle Saved Successfully!");            

            //this.router.navigate(['/tabs/tabsecurity']);

            this.confirmOtherVehicle();

          } else {

            this.disableButton=false;

            this.commonservice.presentToast("Vehicle Save Failed!");
          }        
        });
    }else{
      this.commonservice.presentToast('Please Fill the Form')
    }
  }

  async confirmOtherVehicle() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: '<strong>Vehicle</strong> added successfully',
      backdropDismiss: false,
      buttons: [
        {
          text: "Okay",
          handler: () => {
            /*this.router.navigate(['/tabs/tabsecurity']).then(() => {
              window.location.reload();
            });*/
            //console.log("Confirm Okay");
            this.router.navigate(['/tabs/tabsecurity']);
          },
        }
      ],
      
    });

    await alert.present();
  }

  back()
  {
    this.router.navigate(['/tabs/tabsecurity']);
  }
}
