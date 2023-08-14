import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: "app-ceo-useractivity-home",
  templateUrl: "./ceo-useractivity-home.page.html",
  styleUrls: ["./ceo-useractivity-home.page.scss"],
})
export class CeoUseractivityHomePage implements OnInit {
  userlist = JSON.parse(localStorage.getItem("userlist"));

  reportArr = [
    {
      title: "Maintenance",
      path: "/ceo-useractivity-maintenance",
    },
    {
      title: "Production",
      path: "/ceo-useractivity-production",
    },
  ];

  constructor(
    private zone: NgZone,
    private router: Router,
    private service: AIREIService
  ) {}

  ngOnInit() {}

  btn_Action(item) {
    this.router.navigate([item.path]);
  }
}
