import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AIREIService } from 'src/app/api/api.service';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-securityothervehiclehistory',
  templateUrl: './securityothervehiclehistory.page.html',
  styleUrls: ['./securityothervehiclehistory.page.scss'],
})
export class SecurityothervehiclehistoryPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  vehicleList = [];

  constructor(private fb: FormBuilder, private commonservice: AIREIService, private service: SecurityServiceService, private router: Router) {
    this.callAPI();
   }

  ngOnInit() {
  }

  callAPI()
  {
    var req = {
      userid: this.userlist.userId,
      millcode: this.userlist.millcode
    };    

    this.service.getOtherVehicle(req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {        
        this.vehicleList = resultdata.data;
      } else {
        this.vehicleList=[];
        this.commonservice.presentToast('No Record Found!');
      }
    });
  }

  // showPhoto(path:any)
  // {    
  //   this.viewer.show(path);
  // }

  viewimage(value)
  {
    //console.log(value);
    this.router.navigate(["/zoomimage", { item: value}]);
  }

}
