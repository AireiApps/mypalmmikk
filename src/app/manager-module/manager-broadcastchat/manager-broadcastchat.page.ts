import { Component, OnInit, ViewChild } from "@angular/core";
import { ManagerServiceService } from "src/app/services/manager-service/manager-service.service";
import { ImageUploadService } from "src/app/services/imageupload-service/imageupload";
import { AIREIService } from "src/app/api/api.service";
import { IonContent, ActionSheetController } from "@ionic/angular";
import * as moment from "moment";
import { Router } from "@angular/router";

@Component({
  selector: "app-manager-broadcastchat",
  templateUrl: "./manager-broadcastchat.page.html",
  styleUrls: ["./manager-broadcastchat.page.scss"],
})
export class ManagerBroadcastchatPage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));
  messageArr = [];

  currentUser = this.userlist.name;

  newMsg = "";
  @ViewChild(IonContent) content: IonContent;

  disableEditTextbox = false;

  currentdate = moment(new Date().toISOString()).format("DD-MM-YYYY HH:mm:ss");

  imagePaths = {
    video_path: "",
    personalizedcommunication_path: "",
  };

  constructor(
    private router: Router,
    private imgUpload: ImageUploadService,
    private service: ManagerServiceService,
    private commonservice: AIREIService,
    public actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.callAPI();
  }

  callAPI() {
    this.messageArr = [];

    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      departmentid: this.userlist.dept_id,
      language: this.userlist.language,
    };

    //console.log(req);

    this.service.getCommunicationList(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.messageArr = resultdata.data;

        setTimeout(() => {
          this.content.scrollToBottom(200);
        });
      }
    });
  }

  async presentActionSheet(type) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Select Image Source",
      buttons: [
        {
          text: "Load from Library",
          icon: "image-outline",
          handler: () => {
            this.attachmentfromLibrary(type);
          },
        },
        {
          text: "Use Camera",
          icon: "camera-outline",
          handler: () => {
            this.attachmentfromCamera(type);
          },
        },
        {
          text: "Take Video",
          icon: "videocam-outline",
          handler: () => {
            this.video(type);
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }

  attachmentfromLibrary(type) {
    var areq = type;

    this.imgUpload.ImageUploadfromLibrary(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.personalizedcommunication_path =
            resultdata.data.uploaded_path;

          this.imagePaths.video_path = "";

          //this.commonservice.presentToast("Image Added Successfully!");
        } else {
          this.commonservice.presentToast("Image Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  attachmentfromCamera(type) {
    var areq = type;

    this.imgUpload.ImageUploadSupervisor(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.personalizedcommunication_path =
            resultdata.data.uploaded_path;

          this.imagePaths.video_path = "";

          //this.commonservice.presentToast("Image Added Successfully!");
        } else {
          this.commonservice.presentToast("Image Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  video(type) {

    this.disableEditTextbox = true;

    var areq = type;

    this.imgUpload.VideoUploadSupervisor(areq).then(
      (result) => {
        var resultdata: any;
        resultdata = result;

        resultdata = JSON.parse(resultdata.response);

        if (resultdata.httpcode == 200) {
          this.imagePaths.video_path = resultdata.data.uploaded_path;

          this.imagePaths.personalizedcommunication_path = "";

          this.commonservice.presentToast("Video Added Successfully!");

          this.disableEditTextbox = false;

        } else {

          this.disableEditTextbox = false;
          
          this.commonservice.presentToast("Video Added Failed!");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  btn_save() {
    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      userdepartmentid: this.userlist.dept_id,
      image_location: this.imagePaths.personalizedcommunication_path,
      comments: this.newMsg,
    };

    this.service.saveBroadCastCommunication(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        this.imagePaths.personalizedcommunication_path = "";
        this.imagePaths.video_path = "";
        this.newMsg = "";

        this.callAPI();
      } else {
        this.commonservice.presentToast("Saved Failed!");
      }
    });
  }

  viewimage(value) {
    this.router.navigate(["/zoomimage", { item: value }]);
  }

  viewvideo(value) {
    //console.log(value);
    this.router.navigate(["/playvideo", { item: value }]);
  }

  gotoback() {
    this.router.navigate(["tabs/tabchats"]);
  }
}
