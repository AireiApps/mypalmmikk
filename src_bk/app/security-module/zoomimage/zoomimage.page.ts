import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-zoomimage",
  templateUrl: "./zoomimage.page.html",
  styleUrls: ["./zoomimage.page.scss"],
})
export class ZoomimagePage implements OnInit {
  imageurl = "";

  constructor(private router: Router, private route: ActivatedRoute) {
    this.imageurl = this.route.snapshot.paramMap.get("item");
    //console.log(this.imageurl);
  }

  ngOnInit() {}
}
