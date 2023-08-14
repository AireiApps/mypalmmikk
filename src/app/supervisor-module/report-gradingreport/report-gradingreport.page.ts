import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-gradingreport',
  templateUrl: './report-gradingreport.page.html',
  styleUrls: ['./report-gradingreport.page.scss'],
})
export class ReportGradingreportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  mill_name = this.userlist.millname;
  language = this.userlist.language;

  baseurl = this.userlist.report_url;

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
      "/index.php/Grading_report?mobile=1&user_id=" +
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }
}
