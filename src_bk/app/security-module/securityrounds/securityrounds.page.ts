import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { ImageUploadService } from 'src/app/services/imageupload-service/imageupload';

import { Plugins } from "@capacitor/core";
const { Geolocation } = Plugins;

@Component({
  selector: 'app-securityrounds',
  templateUrl: './securityrounds.page.html',
  styleUrls: ['./securityrounds.page.scss'],
})
export class SecurityroundsPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  securityroundsForm;

  imagePaths = {
    securityround_path: "",
  };

  selectlocation = {
    form:null
  };

  getlatitude=0;
  getlongitude=0;
  locationList;

  constructor(private router: Router, private fb: FormBuilder, private commonservice: AIREIService, private imgUpload: ImageUploadService, private service: SecurityServiceService) { 
    
    this.securityroundsForm = this.fb.group({
      select_location: new FormControl("", Validators.required),
      taComments: new FormControl("", Validators.required),
      location_path: new FormControl("")
    });

    this.getCurrentPosition();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.selectlocation.form = "";
    this.getLocation();    
  }

  getLocation() {
    let req = {
      user_id: this.userlist.userId,
      desgin_id: this.userlist.desigId,
      usergroup_id: this.userlist.userGroupId,
      acc_id: this.userlist.accId,
      role_id: this.userlist.userRoleId,
      dept_id: this.userlist.dept_id,
      millcode: this.userlist.millcode
    }
    this.service.getLocation(req).then(result => {
      var resultdata: any;
      resultdata = result;
      console.log(resultdata.data);
      if (resultdata.httpcode == 200) {
        this.locationList = resultdata.data;
      }
    });
  }

  ImageUpload() {    
    var areq = "securityround";
    this.imgUpload.ImageUploadSecurityRounds(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {

          this.imagePaths.securityround_path = resultdata.data.uploaded_path;
          
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
    if(this.securityroundsForm.valid)
    {
      var req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        image_location : this.imagePaths.securityround_path,
        comments : this.securityroundsForm.value.taComments,
        location : this.securityroundsForm.value.select_location,
        lat : this.getlatitude,
        lang : this.getlongitude      
      };    

      this.service.securityrounds_insert(req).then(result => {
        var resultdata: any;
        resultdata = result;
        if (resultdata.httpcode == 200) {

          this.securityroundsForm.reset();               

          this.selectlocation.form = "";

          this.imagePaths.securityround_path="";                    

          this.commonservice.presentToast("Security Rounds Inserted");

          this.router.navigate(["/tabs/tabsecurity"]);

        } else {
          this.commonservice.presentToast("Security Rounds Inserted Failed");
        }
      });
    }else{
      this.commonservice.presentToast("Please Fill the Form");
    }
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.getlatitude = coordinates.coords.latitude;
    this.getlongitude = coordinates.coords.longitude;    
    //console.log("Current", coordinates.coords.latitude+'\n'+coordinates.coords.longitude);    
  }

}
