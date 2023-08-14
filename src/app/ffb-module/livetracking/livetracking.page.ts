import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from "@angular/core";
import { Plugins } from "@capacitor/core";
import { ActivatedRoute } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";
import { FfbServiceService } from "src/app/services/ffb-service/ffb-service.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

const { Geolocation } = Plugins;

declare var google;

@Component({
  selector: "app-livetracking",
  templateUrl: "./livetracking.page.html",
  styleUrls: ["./livetracking.page.scss"],
})
export class LivetrackingPage implements OnInit {
  @ViewChild("map") mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
  });
  directionForm: FormGroup;

  map: any;
  markers = [];
  progressInterval: any;

  userlist = JSON.parse(localStorage.getItem("userlist"));
  id = "";
  drivername = "";
  vehiclename = "";
  sourcelatitude = "";
  sourcelongitude = "";
  destinationlatitude = "";
  destinationlongitude = "";

  icon_start = {
    url: "assets/img/lorrystart.png", // image url
    scaledSize: new google.maps.Size(32, 42), // scaled size
  };

  icon_end = {
    url: "assets/img/lorryend.png", // image url
    scaledSize: new google.maps.Size(32, 42), // scaled size
  };

  constructor(
    private zone: NgZone,
    private commonservice: AIREIService,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private service: FfbServiceService,
    private fb: FormBuilder
  ) {
    let detailform = this.route.snapshot.paramMap.get("item");
    this.id = JSON.parse(detailform).ffb_trans_id;
    this.drivername = JSON.parse(detailform).driver_name;
    this.vehiclename = JSON.parse(detailform).vehicle_name;
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getGPSHistory();
  }

  ngOnDestroy() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  getGPSHistory() {
    const req = {
      userid: this.userlist.userId,
      millcode: this.userlist.millcode,
      ffbtransid: this.id,
    };

    this.service.getgpshistory(req).then((result) => {
      let resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        if (!this.progressInterval) {
          this.progressInterval = setInterval(() => {
            this.getGPSHistory();
          }, 10000);
        }

        if (
          resultdata.data[0].lat > this.sourcelatitude ||
          resultdata.data[0].lang > this.sourcelongitude
        ) {
          this.sourcelatitude = resultdata.data[0].lat;
          this.sourcelongitude = resultdata.data[0].lang;
          this.destinationlatitude = this.userlist.mill_lat;
          this.destinationlongitude = this.userlist.mill_lang;

          this.loadmapwithdirection();
        }
      } else {
        
        if (this.progressInterval) {
          clearInterval(this.progressInterval);
        }

        this.sourcelatitude = "";
        this.sourcelongitude = "";
        this.destinationlatitude = this.userlist.mill_lat;
        this.destinationlongitude = this.userlist.mill_lang;

        this.loadmap();
      }
    });
  }

  loadmap() {
    let mapOptions = {
      center: {
        lat: parseFloat(this.destinationlatitude),
        lng: parseFloat(this.destinationlongitude),
      },
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const markermill = {
      position: {
        lat: parseFloat(this.destinationlatitude),
        lng: parseFloat(this.destinationlongitude),
      },
      map: this.map,
      icon: this.icon_end,
    };

    new google.maps.Marker(markermill);
  }

  loadmapwithdirection() {
    let mapOptions = {
      center: {
        lat: parseFloat(this.destinationlatitude),
        lng: parseFloat(this.destinationlongitude),
      },
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const markermill = {
      position: {
        lat: parseFloat(this.destinationlatitude),
        lng: parseFloat(this.destinationlongitude),
      },
      map: this.map,
      icon: this.icon_end,
    };

    new google.maps.Marker(markermill);

    this.updatelocation();
  }

  updatelocation() {
    this.markers.map((marker) => marker.setMap(null));
    this.markers = [];

    let latLng = new google.maps.LatLng(
      parseFloat(this.sourcelatitude),
      parseFloat(this.sourcelongitude)
    );

    let marker = new google.maps.Marker({
      position: latLng,
      icon: this.icon_start,
      map: this.map,
    });

    this.markers.push(marker);

    this.addInfoWindow(marker);

    this.startNavigating();
  }

  startNavigating() {
    let getorigin = {
      lat: parseFloat(this.sourcelatitude),
      lng: parseFloat(this.sourcelongitude),
    };

    let getdestination = {
      lat: parseFloat(this.destinationlatitude),
      lng: parseFloat(this.destinationlongitude),
    };

    this.directionsDisplay.setMap(this.map);

    this.directionsService.route(
      {
        origin: getorigin,
        destination: getdestination,
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          this.directionsDisplay.setDirections(response);
        } else {
          window.alert("Direction Request Failed due to " + status);
        }
      }
    );
  }

  addInfoWindow(marker) {
    let infoWindowContent =
      "<div>" +
      '<h5 style="text-align:center">' +
      this.drivername +
      "</h5>" +
      "<p>Vehicle : <b>" +
      this.vehiclename +
      "</b></p>" +
      "</div>";

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });
    infoWindow.open(this.map, marker);

    google.maps.event.addListener(marker, "click", () => {
      infoWindow.open(this.map, marker);
    });
  }

  gotoback() {}
}
