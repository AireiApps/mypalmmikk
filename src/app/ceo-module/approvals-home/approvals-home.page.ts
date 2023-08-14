import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AIREIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-approvals-home',
  templateUrl: './approvals-home.page.html',
  styleUrls: ['./approvals-home.page.scss'],
})
export class ApprovalsHomePage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  constructor(private router: Router, private zone: NgZone, private commonservice: AIREIService) { }

  ngOnInit() {
  }

  quoteapproval() {    
    this.router.navigate(["/quoteapproval"]);
  }

  workorderapproval() {    
    this.router.navigate(["/workorderreport"]);
  }
}
