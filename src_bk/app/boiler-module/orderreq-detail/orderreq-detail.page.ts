import { Component, OnInit } from '@angular/core';
import { BoilerServiceService } from 'src/app/services/boiler-service/boiler-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderreq-detail',
  templateUrl: './orderreq-detail.page.html',
  styleUrls: ['./orderreq-detail.page.scss'],
})
export class OrderreqDetailPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  recentOrder = [];
  orderdetail;

  constructor(private router: Router, private service: BoilerServiceService, private route: ActivatedRoute) {
    let orderform = this.route.snapshot.paramMap.get("item")
    this.orderdetail = JSON.parse(orderform); 
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getOrderDetails()
  }

  ionViewDidEnter() {
    this.getOrderDetails()

  }

  getOrderDetails() {
    let req = {
      "sor_id": this.orderdetail.sor_id,
      "millcode": this.userlist.millcode
    }

    this.service.getRecentStoreListDetails(req).then(result => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentOrder = resultdata.data
      }
    });
  }

}
