import { Component, OnInit } from "@angular/core";
import { AIREIService } from "../api/api.service";
import { ActivatedRoute } from "@angular/router";
import * as lodash from "lodash";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-detail-trans",
  templateUrl: "./detail-trans.page.html",
  styleUrls: ["./detail-trans.page.scss"],
})
export class DetailTransPage implements OnInit {
  detailArr = [];
  userlist = JSON.parse(localStorage.getItem("userlist"));
  detailValue;
  imageOther = "";
  imageFFB = "";
  imageLorry = "";
  imageSupplierDispatch = "";
  imageSecurityImage = "";

  constructor(
    private platform: Platform,
    private service: AIREIService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let detailform = this.route.snapshot.paramMap.get("item");
    this.detailValue = JSON.parse(detailform);
    //console.log(this.detailValue);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getTransDetail();
  }

  ionViewDidEnter() {
    this.getTransDetail();
  }

  getTransDetail() {
    var req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode,
      ffb_trans_id: this.detailValue.ffb_trans_id,
      language: this.userlist.language,
    };

    console.log(req);

    this.service.getTransDetail(req).then((result) => {
      var resultdata: any;
      resultdata = result;

      if (resultdata.httpcode == 200) {
        let dummyArr = [];
        let ImageArr = [];

        if (resultdata.data.length > 0) {
          let item = resultdata.data[0];

          console.log(item);

          for (var key of Object.keys(item)) {
            if (
              key != "Other_file" &&
              key != "Ffb_file" &&
              key != "Lorry_file" &&
              key != "vehicleNoFile" &&
              key != "suplierDispatchNoteFile"
            ) {
              dummyArr.push(item[key]);
            } else {
              ImageArr.push(item[key]);
            }
          }
        }

        //console.log(ImageArr);

        let eachArrr = [];

        for (let i = 0; i < dummyArr.length; i++) {
          let eachitem = dummyArr[i];
          let eachreq = {
            priority_no: parseInt(eachitem.priority_no),
            display_name: eachitem.display_name,
            value: eachitem.value,
          };
          eachArrr.push(eachreq);
        }

        for (let j = 0; j < ImageArr.length; j++) {
          let eachitem = ImageArr[j];
          if (
            eachitem.display_name == "OTHER IMAGE" ||
            eachitem.display_name == "OTRA IMAGEN" ||
            eachitem.display_name == "OUTRA IMAGEM" ||
            eachitem.display_name == "OTHER IMAGE"
          ) {
            if (eachitem.image3) {
              let re = ".jpg";

              if (eachitem.image3.search(re) == -1) {
                this.imageOther = "";
              } else {
                this.imageOther = eachitem.image3;
              }
            } else {
              this.imageOther = "";
            }
          }

          if (
            eachitem.display_name == "FFB IMAGE" ||
            eachitem.display_name == "IMAGEN FFB" ||
            eachitem.display_name == "IMAGEM FFB" ||
            eachitem.display_name == "GAMBAR TBS"
          ) {
            if (eachitem.image1) {
              let re = ".jpg";

              if (eachitem.image1.search(re) == -1) {
                this.imageFFB = "";
              } else {
                this.imageFFB = eachitem.image1;
              }
            } else {
              this.imageFFB = "";
            }
          }

          if (
            eachitem.display_name == "LORRY IMAGE" ||
            eachitem.display_name == "IMAGEN DE CAMION" ||
            eachitem.display_name == "LORRY IMAGE" ||
            eachitem.display_name == "GAMBAR LORRY"
          ) {
            if (eachitem.image2) {
              let re = ".jpg";

              if (eachitem.image2.search(re) == -1) {
                this.imageLorry = "";
              } else {
                this.imageLorry = eachitem.image2;
              }
            } else {
              this.imageLorry = "";
            }
          }

          if (
            eachitem.display_name == "SUPPLIER DISPATCH IMAGE" ||
            eachitem.display_name == "IMAGEN DE ENVÍO DEL PROVEEDOR" ||
            eachitem.display_name == "FORNECEDOR DE ENVIO DE IMAGEM" ||
            eachitem.display_name == "GAMBAR JARAK PEMASOK"
          ) {
            if (eachitem.image4) {
              let re = ".jpg";

              if (eachitem.image4.search(re) == -1) {
                this.imageSupplierDispatch = "";
              } else {
                this.imageSupplierDispatch = eachitem.image4;
              }
            } else {
              this.imageSupplierDispatch = "";
            }
          }

          if (eachitem.display_name == "SECURITY IMAGE") {
            if (eachitem.image5) {
              let re = ".jpg";

              if (eachitem.image5.search(re) == -1) {
                this.imageSecurityImage = "";
              } else {
                this.imageSecurityImage = eachitem.image5;
              }
            } else {
              this.imageSecurityImage = "";
            }
          }
        }

        //console.log("Other Image :" + this.imageOther + '\n' + "FFB Image :" + this.imageFFB + '\n' + "Lorry Image :" + this.imageLorry);

        this.detailArr = lodash.sortBy(eachArrr, ["priority_no"], ["asc"]);

        console.log(this.detailArr);

        // this.detailArr = resultdata.data;
      } else {
        this.service.presentToast("Grading Stage Not Completed...");
      }
    });
  }

  // showPhoto(path, title)
  // {
  //   // var options = {
  //   //   closeButton: true, // iOS only: default is true
  //   //   copyToReference: true // iOS only: default is false
  //   // };

  //   // if (this.platform.is("ios")) {
  //   //   path = decodeURIComponent(path);
  //   // }

  //   //console.log(path);

  //   //this.viewer.show(path, title);
  // }

  viewimage(value) {
    //console.log(value);
    //this.router.navigate(["/zoomimage", { item: value}]);
  }

  imagenotloading(event) {
    event.target.src = "../../assets/img/noimageavailable.png";
  }
}
