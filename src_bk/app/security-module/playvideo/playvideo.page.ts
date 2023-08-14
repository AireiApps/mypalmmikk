import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.page.html',
  styleUrls: ['./playvideo.page.scss'],
})
export class PlayvideoPage implements OnInit {

  videourl='';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.videourl = this.route.snapshot.paramMap.get("item");
   }

  ngOnInit() {
  }

}
