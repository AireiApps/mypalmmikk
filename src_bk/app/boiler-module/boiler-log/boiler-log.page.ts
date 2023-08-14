import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { appsettings } from 'src/app/appsettings';
import { BoilerServiceService } from 'src/app/services/boiler-service/boiler-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { AIREIService } from 'src/app/api/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-boiler-log',
  templateUrl: './boiler-log.page.html',
  styleUrls: ['./boiler-log.page.scss'],
})
export class BoilerLogPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  checkinouttime=moment(new Date().toISOString()).format("HH:mm");

  count = 0;
  checkcount=0; /*To send API*/
  checkinoutflag=0; /*To check status*/
  
  //mill_name = appsettings.MILL_NAME

  mill_name = this.userlist.millname;
  
  boilerlogForm;
  
  selectshift = {
    form:null
  };

  itemsArr = [
    [
      {
        title: "Log Entry",
        path: "/boiler-insert",
        imgpath: "../../assets/img/logentry.png",
      },
      {
        title: "View Log",
        path: "/boilerview",
        imgpath: "../../assets/img/viewlog.png",
      },
    ],
    [
      {
        title: "Request Item",
        path: "/orderreqlist",
        imgpath: "../../assets/img/orderrequest.png",
      },
      /*{
        title: "Comm.",
        path: "/boilercommunication-put",
        imgpath: "../../assets/img/communicationhistory.png",
      }*/      
    ],
    /*[
      {
        title: "Comm. Log",
        path: "/boilercommunication-show",
        imgpath: "../../assets/img/maintenancereport.png",
      }
    ]*/
  ];

  constructor(private router: Router, private fb: FormBuilder, private commonservice: AIREIService, private service: BoilerServiceService, private httpservice: HttpserviceService) {
    this.boilerlogForm = this.fb.group({
      shift: new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();

    this.getcheckinstatus();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();

    this.getcheckinstatus();
  }

  getcheckinstatus() {
    let req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode
    }

    //console.log(req);

    this.service.getCheckInStatus(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        //this.checkinoutflag = resultdata.data;         
        this.checkinoutflag = resultdata.status;
        this.selectshift.form = resultdata.shift;
        localStorage.setItem("shift", resultdata.shift);
      }else{
        this.checkinoutflag = 0;
        this.selectshift.form = 0;
        localStorage.setItem("shift", "0");
      }
    });
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }

  btn_notification() {
    localStorage.setItem(
      "badge_count",
      "0"
    );
    this.router.navigate(["/notification"]);
  }

  showTimepicker() 
  {
    this.callapi();
  }

  callapi()
  {
    if (this.boilerlogForm.valid) 
    {
      if(this.checkinoutflag==0)
      {
        this.checkcount=1;
      }

      if(this.checkinoutflag==1)
      {
        this.checkcount=0;
      }

      const req = {
        user_id: this.userlist.userId,
        millcode: this.userlist.millcode,
        name: this.userlist.name,
        role_id: this.userlist.userRoleId,
        time: this.checkinouttime,
        Status: this.checkcount,
        Shift: this.boilerlogForm.value.shift
      };

      console.log(req);

      this.service.saveBoilershift(req).then(result => {
        var resultdata: any;
        resultdata = result;      

        if (resultdata.httpcode == 200)
        { 
          
          this.httpservice.getContactLogin();
          this.getcheckinstatus();

          if(this.checkcount==1)
          {
            this.commonservice.presentToast('Shift Started Successfully!');
          }else{
            this.commonservice.presentToast('Shift Stopped Successfully!');
          }          
        } else {
          this.commonservice.presentToast('Shift Start Failed!');
        }
      });
    }else{
      this.commonservice.presentToast('Shift selection is Mandatory...')
    }
  }
}
