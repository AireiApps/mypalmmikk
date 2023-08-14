import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maintenance-order-details',
  templateUrl: './maintenance-order-details.page.html',
  styleUrls: ['./maintenance-order-details.page.scss'],
})
export class MaintenanceOrderDetailsPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  recentOrder = [];
  orderdetail;

  constructor(private service: StoreServiceService, private route: ActivatedRoute) { 
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
