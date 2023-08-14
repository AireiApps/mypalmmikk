import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-laboratory-generallabreport",
  templateUrl: "./laboratory-generallabreport.page.html",
  styleUrls: ["./laboratory-generallabreport.page.scss"],
})
export class LaboratoryGenerallabreportPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  language = this.userlist.language;
  baseurl = this.userlist.report_url;

  mill_name = this.userlist.millname;

  weburl;

  constructor() {}

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
      "/index.php/Lab_reports/Daily_report?user_id=" +
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
