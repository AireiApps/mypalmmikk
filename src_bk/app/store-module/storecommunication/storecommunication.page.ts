import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-storecommunication',
  templateUrl: './storecommunication.page.html',
  styleUrls: ['./storecommunication.page.scss'],
})
export class StorecommunicationPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  count = 0;

  itemsArr = [
    [
      {
        title: "Comm.",
        path: "/storecommunication-put",
        imgpath: "../../assets/img/communicationhistory.png",
      },
      // {
      //   title: "Communication Report",
      //   path: "/storecommunication-show",
      //   imgpath: "../../assets/img/maintenancereport.png",
      // },
    ]
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btn_notification() {
    localStorage.setItem("badge_count", "0");
    this.router.navigate(["/notification"]);
  }

  btn_Action(item) {
    this.router.navigate([item.path]);
  }

}
