import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appsettings } from 'src/app/appsettings';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

  constructor(public httpClient: HttpClient) { }

  formParams(params) {
    let postData = new FormData();
    if (params) {
      for (let k in params) {
        postData.append(k, params[k]);
      }
    }
    return postData
  }

  getRecentStoreList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.sorlist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }


  getRecentStoreListDetails(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.sorlist_detail;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getRecentMaintanceList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    //var api = appsettings.sorinsertedlist;
    var api = appsettings.sorlist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getRequestList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.itemrequesttype;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getStationList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.stationlist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getLocation(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.locationlist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getItems(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.itemlist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getEmployeeList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.employeelist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getStatusList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.statuslist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  saveSOR(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.sor_insert;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  saveMaintenance(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.weeklymaintenance_insert;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getWeeklyMaintanceList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.weeklymaintenance_list;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getWeeklyMaintanceView(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.weeklymaintenance_view;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getTeamView(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.weeklymaintenance_team_view;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getGreasingList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.greasing_list;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  saveGreasing(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.greasing_insert;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getGreasingView(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.greasing_view;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }


  getLubricantList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.lubricant_list;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  saveLubricant(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.lubricant_insert;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getLubricationView(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.lubricant_view;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getShutdownMaintenanceList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.shutdownmaintenance_list;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  saveSDMP(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.sdmp_insert;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getFitterView(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.sdmpfitter_view;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getJobView(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.sdmpjob_view;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getMaintenanceHeadings(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);
    console.log(reqOpts);
    var api = appsettings.maintenancereporthead;
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

  saveMaintenanceReport(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);
    console.log(reqOpts);
    var api = appsettings.savemaintenancereport;
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

  deleteSOR(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    //var api = appsettings.sorinsertedlist;
    var api = appsettings.deletesor;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  saveCommunication(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.supevisorcommunication;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getMachineRunningList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.machinerunning_list;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  resetMachineRunningHours(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    //var api = appsettings.sorinsertedlist;
    var api = appsettings.resetmachinerunninghours;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  updateMaintenance(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.weeklymaintenance_update;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  saveWeeklyMaintenanceAction(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.saveweeklymaintenance_action;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  deleteWeeklyMachineList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)
    
    var api = appsettings.deleteweeklymaintenance;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  deleteWeeklyTeamList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)
    
    var api = appsettings.deleteweeklymaintenance;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  saveShutDownMaintenanceAction(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.saveshutdownmaintenance_action;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  deleteSDMPFitterList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)
    
    var api = appsettings.deleteshutdownmaintenance;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  deleteSDMPJobList(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)
    
    var api = appsettings.deleteshutdownmaintenance;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  getDepartment(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params)

    var api = appsettings.departmentlist;
    return new Promise((resolve, reject) => {
      this.httpClient.post(api, reqOpts).subscribe(
        data => {
          console.log(data)
          resolve(data);
        },
        error => {
          console.log(error)

          reject(error);
        }
      );
    });
  }

  saveBroadCastCommunication(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);
    console.log(reqOpts);
    var api = appsettings.supevisorcommunication;
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

  savePersonalizedCommunication(params) {
    var reqOpts: any;
    reqOpts = this.formParams(params);
    console.log(reqOpts);
    var api = appsettings.couchbasesupevisorcommunication;
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
