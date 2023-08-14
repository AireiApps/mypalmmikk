import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AIREIService } from 'src/app/api/api.service';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-securityroundshistory',
  templateUrl: './securityroundshistory.page.html',
  styleUrls: ['./securityroundshistory.page.scss'],
})
export class SecurityroundshistoryPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  
  roundsForm;
  roundsList = [];

  fromdate = new Date().toISOString();
  todate = new Date().toISOString();

  getFromDate;
  getToDate;

  constructor(private fb: FormBuilder, private commonservice: AIREIService, private service: SecurityServiceService, private router: Router) { 
    this.roundsForm = this.fb.group({
      from_date: new FormControl(this.fromdate),
      to_date: new FormControl(this.todate)
    });
  }

  ngOnInit() {
  }

  callAPI()
  {
    this.getFromDate = moment(this.roundsForm.value.from_date).format("YYYY-MM-DD");
    this.getToDate = moment(this.roundsForm.value.to_date).format("YYYY-MM-DD");

    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      fromdate: this.getFromDate,
      todate:  this.getToDate
    };    

    this.service.getSecurityRounds(req).then(result => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {        
        this.roundsList = resultdata.data;
      } else {
        this.roundsList=[];
        this.commonservice.presentToast('No Record Found!');
      }
    });
  }

  /*showPhoto(path:any)
  {
    //console.log('Imagepath'+path);
    this.viewer.show(path);
  }*/

  viewimage(value)
  {
    //console.log(value);
    this.router.navigate(["/zoomimage", { item: value}]);
  }

}
