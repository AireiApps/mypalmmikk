import { Component, OnInit } from '@angular/core';
import { ManagerServiceService } from 'src/app/services/manager-service/manager-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-managerorderreq-detail',
  templateUrl: './managerorderreq-detail.page.html',
  styleUrls: ['./managerorderreq-detail.page.scss'],
})
export class ManagerorderreqDetailPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  recentOrder = [];
  orderdetail;

  constructor(private service: ManagerServiceService, private route: ActivatedRoute) { 
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
