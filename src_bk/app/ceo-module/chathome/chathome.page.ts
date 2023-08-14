import { Component, OnInit, NgZone } from "@angular/core";
import { appsettings } from "src/app/appsettings";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: "app-chathome",
  templateUrl: "./chathome.page.html",
  styleUrls: ["./chathome.page.scss"],
})
export class ChathomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  mill_name = this.userlist.millname;

  count = 0;
  brodacastcommcount = 0; /*Broadcdast notification count*/
  personalizedcommcount = 0; /*Personalized notification count*/

  itemsArr = [
    [
      {
        title: "Broadcast",
        name: "Broadcast Communication",
        path: "/ceo-broadcastchat",
        imgpath: "../../assets/img/broadcastlog.png",
      },
      {
        title: "Personalized",
        name: "Personalized Communication",
        path: "/ceo-personalizedchatdepartments",
        imgpath: "../../assets/img/personlizedlog.png",
      },
    ],
  ];

  ceoArr = [
    [
      {
        title: "Broadcast",
        name: "Broadcast Communication",
        path: "/ceo-broadcastchat",
        imgpath: "../../assets/img/broadcastlog.png",
      },
    ],
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: AIREIService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getreportnotification();
  }

  ionViewDidEnter() {
    this.getreportnotification();
  }

  getreportnotification() {
    let req = {
      userid: this.userlist.userId,
      desgin_id: this.userlist.desigId,
      usergroup_id: this.userlist.userGroupId,
      role_id: this.userlist.userRoleId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
    };

    //console.log(req);

    this.service.getreportnotification(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.brodacastcommcount = resultdata.brodacastcommcount;
        this.personalizedcommcount = resultdata.personalizedcommcount;
      } else {
        this.brodacastcommcount = 0;
        this.personalizedcommcount = 0;
      }
    });
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
