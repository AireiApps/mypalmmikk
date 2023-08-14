import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { HttpClient, HttpParams } from "@angular/common/http";
import { appsettings } from "src/app/appsettings";
import { AIREIService } from "src/app/api/api.service";

@Injectable({
  providedIn: "root",
})
export class FfbServiceService {
  constructor(
    public httpClient: HttpClient,
    private toastCtrl: ToastController,
    private commonservice: AIREIService
  ) {}

  formParams(params) {
    let postData = new FormData();
    if (params) {
      for (let k in params) {
        postData.append(k, params[k]);
      }
    }
    return postData;
  }

  insertfbDelivery(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.ffbDelivery;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          reject(error);
        }
      );
    });
  }

  recentffbdeliverylist(params) {
    this.commonservice.presentLoading();
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.ffbdeliverylist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {

          this.commonservice.dimmissLoading();

          console.log(data);
          resolve(data);
        },
        (error) => {

          this.commonservice.dimmissLoading();

          console.log(error);

          reject(error);
        }
      );
    });
  }

  deletedriver(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.driverdelete;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          reject(error);
        }
      );
    });
  }

  deletevechicle(params) {
    this.commonservice.presentLoading();
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.vehiceldelete;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          this.commonservice.dimmissLoading();
          console.log(data);
          resolve(data);
        },
        (error) => {
          this.commonservice.dimmissLoading();
          console.log(error);

          reject(error);
        }
      );
    });
  }

  getgpshistory(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);

    var api = appsettings.driverlocationhistory;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        (data) => {
          console.log(data);
          resolve(data);
        },
        (error) => {
          console.log(error);

          reject(error);
        }
      );
    });
  }
}
