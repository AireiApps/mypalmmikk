import { Component, OnInit, NgZone } from "@angular/core";
import { AIREIService } from "src/app/api/api.service";
import { Router } from "@angular/router";
import { GradingServiceService } from "src/app/services/grading-service/grading-service.service";

@Component({
  selector: "app-gradinghome",
  templateUrl: "./gradinghome.page.html",
  styleUrls: ["./gradinghome.page.scss"],
})
export class GradinghomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  count = 0;
  gradingArr;

  enableflag = false;

  constructor(
    private zone: NgZone,
    private service: GradingServiceService,
    private router: Router,
    private commonservice: AIREIService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getGrading();
  }

  ionViewDidEnter() {

    this.commonservice.presentLoading();

    this.getGrading();
  }

  getGrading() {
    this.gradingArr = [];

    var req = {
      userid: this.userlist.userId,
      departmentid: this.userlist.dept_id,
      millcode: this.userlist.millcode,
      language: this.userlist.language,
    };

    //console.log(req);

    this.service.getGradingList(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        this.gradingArr = resultdata.data;
        this.enableflag = false;
      } else {
        this.gradingArr = [];
        this.enableflag = true;
      }
    });
  }

  grading_check(value) {
    this.router.navigate(["/gradingform", { item: JSON.stringify(value) }]);
  }

  btn_ReceiveGrading() {
    this.router.navigate(["/grading-manualform"]);
  }

  getStatusColor(type) {
    let color;

    if (type == "OTHER") {
      color = "#6C7A89";
    }

    return color;
  }
}
