import { Component, OnInit, NgZone } from "@angular/core";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { appsettings } from "src/app/appsettings";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.page.html",
  styleUrls: ["./schedule.page.scss"],
})
export class SchedulePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  user_id = this.userlist.userId;
  language = this.userlist.language;
  //mill_name = appsettings.MILL_NAME;

  mill_name = this.userlist.millname;

  weburl;

  constructor(
    public modalController: ModalController,
    private screenOrientation: ScreenOrientation
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getUrl();
  }

  ionViewWillEnter() {
    this.getUrl();
  }

  ngOnDestroy() {
    this.screenOrientation.unlock();
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }
  
  getUrl() {
    let formatedurl =
      "http://103.27.72.29/mypalmtest/index.php/Maintenance_planning/schedule?mobile=1&user_id="+
      this.user_id +
      "&language=" +
      this.language;

    this.weburl = formatedurl;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
      data: "",
    });
  }
}
