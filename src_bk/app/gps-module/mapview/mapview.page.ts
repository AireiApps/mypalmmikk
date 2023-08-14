import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from "@angular/core";
import { google } from "google-maps";
// import { Geolocation } from "@ionic-native/geolocation/ngx";
import { DriverServiceService } from "src/app/services/driver-service/driver-service.service";
import { ActivatedRoute } from "@angular/router";
// import * as firebase from "firebase/app";
// import "firebase/firestore";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

import { Plugins } from "@capacitor/core";
const { Geolocation } = Plugins;
declare var google;
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as moment from "moment";
import { Router } from '@angular/router';
import { AIREIService } from 'src/app/api/api.service';

@Component({
  selector: "app-mapview",
  templateUrl: "./mapview.page.html",
  styleUrls: ["./mapview.page.scss"],
})
export class MapviewPage implements OnInit {
  @ViewChild("map") mapElement: ElementRef;
  icon_ffb = {
    url: "assets/icon/start.png", // image url
    scaledSize: new google.maps.Size(32, 42), // scaled size
  };

  icon_mill = {
    url: "assets/icon/end.png", // image url
    scaledSize: new google.maps.Size(32, 42), // scaled size
  };

  icon_truck = {
    url: "assets/icon/trucklocation.png", // image url
    scaledSize: new google.maps.Size(32, 42), // scaled size
  };

  map: any;
  milllatLng;
  // ffblatLng = new google.maps.LatLng(4.9043918, 100.9073482);

  lorrymarker: any;
  userlist = JSON.parse(localStorage.getItem("userlist"));
  detailValue;
  name;

  mycurrentLat;
  screentype;
  roleid;
  newPosition;
  locations: Observable<any>;
  locationsCollection: AngularFirestoreCollection<any>;

  isTracking = false;
  watch: string;
  user = null;
  markers = [];
  directionsService;
  directionsDisplay;
  trans_id = "";
  vechicle_no = "";
  constructor(
    // public geolocation: Geolocation,
    private service: DriverServiceService,
    private route: ActivatedRoute,
    private zone: NgZone,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private commonservice: AIREIService
  ) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.name = this.userlist.department;
    console.log(this.name);
    this.milllatLng = new google.maps.LatLng(
      this.userlist.mill_lat,
      this.userlist.mill_lang
    );
    const detailform = this.route.snapshot.paramMap.get("item");

    this.screentype = this.route.snapshot.paramMap.get("type");

    this.roleid = this.route.snapshot.paramMap.get("roleid");

    this.detailValue = JSON.parse(detailform);
    
    //console.log(this.detailValue);
    //console.log(this.screentype);

    if (this.detailValue.ffbTrans_Id) {
      this.trans_id = this.detailValue.ffbTrans_Id;
    }
    if (this.detailValue.ffb_trans_id) {
      this.trans_id = this.detailValue.ffb_trans_id;
    }

    if (this.detailValue.vehicle_name) {
      this.vechicle_no = this.detailValue.vehicle_name;
    }
    if (this.detailValue.vehicle_no) {
      this.vechicle_no = this.detailValue.vehicle_no;
    }

    //console.log("Details: " + this.trans_id);

    

    this.loadMap();
  }

  ionViewWillEnter() {}

  anonLogin() {
    this.afAuth.signInAnonymously().then((res) => {
      this.user = res.user;

      let newtrans = String(this.trans_id);
      let newvechicle_no = String(this.vechicle_no);

      this.locationsCollection = this.afs.collection(
        `locations/${newtrans}/vechicle/${newvechicle_no}/track`,
        (ref) => ref.limit(1).orderBy("timestamp", "desc")
      );

      // Make sure we also get the Firebase item ID!
      this.locations = this.locationsCollection.snapshotChanges().pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

      // Update Map marker on every change
      this.locations.subscribe((locations) => {
        this.updateMap(locations);
      });
    });
  }
  direction() {
    this.startTracking();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(4.9047228, 100.9075464);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      fullscreenControl: false,
      linksControl: false,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const markermill = {
      position: this.milllatLng,
      map: this.map,
      icon: this.icon_mill,
    };
    new google.maps.Marker(markermill);

    if (this.screentype == "history") {
      this.getHistoryPolyLine();
    } else if (this.screentype == "driver") {
      this.anonLogin();
      this.startTracking();
      this.getCurrentPosition();
    }else{
      this.anonLogin();
    }
    // else {
    //   if (this.name == "Driver") {
    //   }
    // }
  }

  async getCurrentPosition() {
    
    const coordinates = await Geolocation.getCurrentPosition();
    //console.log("Current", coordinates);

    this.commonservice.presentToast(coordinates);

    let latLng = new google.maps.LatLng(
      coordinates.coords.latitude,
      coordinates.coords.longitude
    );
    this.startNavigating(latLng);
  }

  startTracking() {
    this.isTracking = true;
    this.watch = Geolocation.watchPosition(
      {
        enableHighAccuracy: true,
      },
      (position, err) => {
        if (position) {
          this.zone.run(() => {
            this.newPosition =
              position.coords.latitude + "," + position.coords.longitude;
          });
          let dateTime = moment().format("DD-MM-YYYY HH:mm:ss");

          this.addNewLocation(
            position.coords.latitude,
            position.coords.longitude,
            dateTime
          );
        }
      }
    );
  }

  addNewLocation(lat, lng, timestamp) {
    this.locationsCollection.add({
      lat,
      lng,
      timestamp,
    });

    let position = new google.maps.LatLng(lat, lng);
    this.map.setCenter(position);
    this.map.setZoom(20);

    let req = {
      ffbtransactionid: this.trans_id,
      lat: lat,
      lang: lng,
    };
    this.service.ourserverLatLng(req);
  }

  updateMap(locations) {
    // Remove all current marker
    this.markers.map((marker) => marker.setMap(null));
    this.markers = [];

    for (let loc of locations) {
      let latLng = new google.maps.LatLng(loc.lat, loc.lng);
      // this.updateNavigation(latLng);

      let marker = new google.maps.Marker({
        map: this.map,
        // animation: google.maps.Animation.DROP,
        position: latLng,
        icon: this.icon_truck,
      });
      this.markers.push(marker);
    }
  }

  // async getNewCurrentPosition() {
  //   const coordinates = await Geolocation.getCurrentPosition();
  //   console.log("Current", coordinates);
  //   const myLatlng = new google.maps.LatLng(
  //     coordinates.coords.latitude,
  //     coordinates.coords.longitude
  //   );
  //   this.mycurrentLat = myLatlng;
  //   this.lorrymarker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: this.map,
  //     icon: this.icon_truck,
  //   });

  //   this.startNavigating(myLatlng);

  //   this.service.createVechicleGEO(this.detailValue, coordinates.coords);
  //   this.watchPosition();
  // }

  // watchPosition() {
  //   Geolocation.watchPosition({timeout: 30000, enableHighAccuracy: true}, (position, err) => {
  //     if (position) {
  //       this.zone.run(() => {
  //         this.newPosition = position.coords.latitude + "," + position.coords.longitude;
  //       });

  //       this.service.createVechicleGEO(this.detailValue, position.coords);

  //       if (this.lorrymarker != null) {
  //         this.lorrymarker.setMap(null);
  //       }
  //       const myLatlng = new google.maps.LatLng(
  //         position.coords.latitude,
  //         position.coords.longitude
  //       );
  //       this.mycurrentLat = myLatlng;

  //       this.lorrymarker = new google.maps.Marker({
  //         position: myLatlng,
  //         map: this.map,
  //         icon: this.icon_truck,
  //       });
  //       this.startNavigating(myLatlng);

  //     }
  //   });
  // }

  // // getCurrentLocation() {
  // //   this.geolocation
  // //     .getCurrentPosition()
  // //     .then((resp) => {
  // //       // resp.coords.latitude
  // //       // resp.coords.longitude
  // //       console.log(resp);

  // //       const myLatlng = new google.maps.LatLng(
  // //         resp.coords.latitude,
  // //         resp.coords.longitude
  // //       );
  // //       this.lorrymarker = new google.maps.Marker({
  // //         position: myLatlng,
  // //         map: this.map,
  // //         icon: this.icon_truck,
  // //       });

  // //       this.startNavigating(myLatlng);

  // //       this.service.createVechicleGEO(this.detailValue, resp.coords);
  // //     })
  // //     .catch((error) => {
  // //       console.log("Error getting location", error);
  // //     });

  // //   const watch = this.geolocation.watchPosition();
  // //   watch.subscribe((data) => {
  // //     console.log(data);

  // //     this.service.createVechicleGEO(this.detailValue, data.coords);

  // //     if (this.lorrymarker != null) {
  // //       this.lorrymarker.setMap(null);
  // //     }

  // //     const myLatlng = new google.maps.LatLng(
  // //       data.coords.latitude,
  // //       data.coords.longitude
  // //     );
  // //     this.lorrymarker = new google.maps.Marker({
  // //       position: myLatlng,
  // //       map: this.map,
  // //       icon: this.icon_truck,
  // //     });

  // //     // this.startNavigating(this.lorrylatLng);

  // //     // data can be a set of coordinates, or an error (if an error occurred).
  // //     // data.coords.latitude
  // //     // data.coords.longitude
  // //   });
  // // }

  // async getMarker() {
  //   // tslint:disable-next-line: max-line-length
  //   const snapshot = await firebase
  //     .firestore()
  //     .collection("ffb")
  //     .doc(String(this.detailValue.ffbTrans_Id))
  //     .collection("vechicle")
  //     .doc(String(this.detailValue.vehicle_no))
  //     .get();
  //   const data = snapshot.data();

  //   const markertruck = new google.maps.Marker({
  //     position: new google.maps.LatLng(data.lat, data.lng),
  //     map: this.map,
  //     icon: this.icon_truck,
  //   });
  //   this.lorrymarker = new google.maps.Marker(markertruck);

  //   return data;
  // }

  getHistoryPolyLine() {
    // var req = {
    //   ffbtransid: this.detailValue.ffbTrans_Id,
    //   millcode: this.userlist.millcode
    // };
    
    var req = {
      ffbtransid: this.trans_id,
      millcode: this.userlist.millcode
    };

    //console.log(req);

    this.service.getLocationHistoryPath(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      let path = [];
      if (resultdata.httpcode == 200) {

        //console.log(resultdata.data[0]);

        for (var i = 0; i < resultdata.data.length; i++) {

          //console.log(i + resultdata.data[i]);

          let eachdata = resultdata.data[i];

          let eachreq = {
            "lat":eachdata.lat,
            "lng":eachdata.lang
          }

          //console.log("Polyline" + eachreq);

          path.push(
             eachreq
          );
        }
        console.log("Map Path: " + path);
        this.updateMapPolyLine(path);
      } else {
        //  this.commonservice.presentToast('No Record Found!')
      }
    });
  }

  updateMapPolyLine(newpath) {
    console.log(newpath);
    var polyline = new google.maps.Polyline({
      path: newpath,
      strokeColor: "#AA00FF",
      strokeOpacity: 0.7,
      strokeWeight: 4,
      geodesic: true,
    });
    polyline.setMap(this.map);
  }

  // getLorryLocation() {
  //   // this.getMarker();
  //   // tslint:disable-next-line: max-line-length
  //   firebase
  //     .firestore()
  //     .collection("ffb")
  //     .doc(String(this.detailValue.ffbTrans_Id))
  //     .collection("vechicle")
  //     .doc(String(this.detailValue.vehicle_no))
  //     .onSnapshot((doc) => {
  //       console.log("Current data: ", doc && doc.data());
  //       console.log("Maker ", this.lorrymarker);

  //       if (doc.data()) {
  //         if (this.lorrymarker != null) {
  //           this.lorrymarker.setMap(null);
  //         }

  //         const myLatlng = new google.maps.LatLng(
  //           doc.data().lat,
  //           doc.data().lng
  //         );
  //         this.lorrymarker = new google.maps.Marker({
  //           position: myLatlng,
  //           map: this.map,
  //           icon: this.icon_truck,
  //         });
  //       }
  //     });
  // }

  // loadMap() {
  //   let centerlatlng;
  //   if (this.name == "Driver") {
  //     centerlatlng = this.mycurrentLat;
  //   } else {
  //     centerlatlng = this.milllatLng;
  //   }
  //   const mapOptions = {
  //     center: centerlatlng,
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     mapTypeControl: false,
  //     fullscreenControl: false,
  //     linksControl: false,
  //   };

  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //   // var marker = new google.maps.Marker({
  //   //   position: this.latLng,
  //   //   map: this.map,
  //   //   icon: this.icon
  //   // });

  //   const markermill = {
  //     position: this.milllatLng,
  //     map: this.map,
  //     icon: this.icon_mill,
  //   };
  //   new google.maps.Marker(markermill);

  //   // const markerffb = new google.maps.Marker({
  //   //   position: this.ffblatLng,
  //   //   map: this.map,
  //   //   icon: this.icon_ffb
  //   // });
  //   // new google.maps.Marker(markerffb);

  //   if (this.screentype == "history") {
  //     this.getHistoryPolyLine();
  //   } else {
  //     if (this.name == "Driver") {
  //       // this.getCurrentLocation();
  //       this.getNewCurrentPosition();
  //     } else {
  //       this.getLorryLocation();
  //     }
  //   }

  //   // this.startNavigating(this.lorrylatLng);

  //   // this.geolocation.getCurrentPosition().then((position) => {

  //   //   let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  //   //   let mapOptions = {
  //   //     center: latLng,
  //   //     zoom: 15,
  //   //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   //   }

  //   //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //   // }, (err) => {
  //   //   console.log(err);
  //   // });
  // }

  // directionUpdate(destlatlng) {
  //   const directionsService = new google.maps.DirectionsService();
  //   const directionsDisplay = new google.maps.DirectionsRenderer({
  //     suppressMarkers: true,
  //   });

  //   // directionsDisplay.setMap(this.map);
  //   // directionsDisplay.setPanel(this.direction.nativeElement);

  //   directionsService.route(
  //     {
  //       origin: this.milllatLng,
  //       destination: destlatlng,
  //       travelMode: google.maps.TravelMode.DRIVING,
  //     },
  //     (res, status) => {
  //       console.log(status);
  //       console.log(res);
  //       if (status == google.maps.DirectionsStatus.OK) {
  //         directionsDisplay.setDirections(res);
  //       } else {
  //         console.warn(status);
  //       }
  //     }
  //   );
  // }

  updateNavigation(destlatlng) {
    this.directionsService.route(
      {
        origin: this.milllatLng,
        destination: destlatlng,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (res, status) => {
        console.log(status);
        console.log(res);

        if (status == google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(res);
        } else {
          console.warn(status);
        }
      }
    );
  }

  startNavigating(destlatlng) {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
    });

    this.directionsDisplay.setMap(this.map);
    // directionsDisplay.setPanel(this.direction.nativeElement);

    this.directionsService.route(
      {
        origin: this.milllatLng,
        destination: destlatlng,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (res, status) => {
        console.log(status);
        console.log(res);

        if (status == google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(res);
        } else {
          console.warn(status);
        }
      }
    );
  }

  back()
  {
    if (this.screentype == "ffbsupplier" && this.roleid == "23") {
      //this.router.navigate(['/tabs/tab1']);
      this.router.navigate(['/tabs/tab1']).then(() => {
        window.location.reload();
      });
    }else if (this.screentype == "history" && this.roleid == "23") {
      //this.router.navigate(['/tabs/tab2']);
      this.router.navigate(['/tabs/tab2']).then(() => {
        window.location.reload();
      });
    }else if (this.screentype == "driver" && this.roleid == "11") {
      //this.router.navigate(['/tabs/tabdriver1']);
      this.router.navigate(['/tabs/tabdriver1']).then(() => {
        window.location.reload();
      });
    }else if (this.screentype == "history" && this.roleid == "11") {
      //this.router.navigate(['/tabs/tabdriverhistory1']);
      this.router.navigate(['/tabs/tabdriverhistory1']).then(() => {
        window.location.reload();
      });
    }else if (this.screentype == "security" && this.roleid == "13") {
      //this.router.navigate(['/tabs/tabsecurity']);
      this.router.navigate(['/tabs/tabsecurity']).then(() => {
        window.location.reload();
      });
    }else if (this.screentype == "history" && this.roleid == "13") {
      this.router.navigate(['/overallhistory']);
    }
  }
}