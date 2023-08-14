import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { appsettings } from "src/app/appsettings";
import { HttpserviceService } from "src/app/services/httpservice/httpservice.service";

@Component({
  selector: "app-quoteapproval",
  templateUrl: "./quoteapproval.page.html",
  styleUrls: ["./quoteapproval.page.scss"],
})
export class QuoteapprovalPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  department_id = this.userlist.dept_id;
  millcode = this.userlist.millcode;
  mill_name = this.userlist.millname;

  language = this.userlist.language;

  baseurl = this.userlist.report_url;

  weburl;

  constructor(
    private router: Router,
    private httpservice: HttpserviceService,
    private zone: NgZone
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ionViewWillEnter() {
    this.getUrl();
  }

  getUrl() {
    let formatedurl =
      this.baseurl +
      "/index.php/RequestforQuotation_mobile?user_id=" +
      this.user_id +
      "&millcode=" +
      this.millcode +
      "&departmentid=" +
      this.department_id +
      "&language" +
      this.language;

    this.weburl = formatedurl;
  }
}
