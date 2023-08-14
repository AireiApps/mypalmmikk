import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";
import { AIREIService } from "src/app/api/api.service";
import { SecurityServiceService } from "src/app/services/security-service/security-service.service";
import * as moment from "moment";

@Component({
  selector: 'app-security-personalizedchatdepartment',
  templateUrl: './security-personalizedchatdepartment.page.html',
  styleUrls: ['./security-personalizedchatdepartment.page.scss'],
})
export class SecurityPersonalizedchatdepartmentPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  currenttime = moment(new Date().toISOString()).format("HH:mm");

  departmentArr = [];

  constructor(
    private router: Router,
    private httpservice: HttpserviceService,
    private commonservice: AIREIService,
    private service: SecurityServiceService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getchatdepartment();
  }

  ionViewDidEnter() {
    this.getchatdepartment();
  }

  getchatdepartment() {
    let req = {
      user_id: this.userlist.userId,
      plan: this.userlist.plan,
      role_id: this.userlist.userRoleId,
      dept_id: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      language: this.userlist.language,
    };

    this.service.getChatDepartment(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.departmentArr = resultdata.data;
      } else {
        this.commonservice.presentToast("No Departments Found...");
      }
    });
  }

  personalizedchat(value) {
    console.log(value);

    this.router.navigate(["/security-personalizedchat", { department:value.deparment, departmentid: value.id }]);
  }

  gotoback() {
    this.router.navigate(["tabs/tabchats"]);
  }

}
