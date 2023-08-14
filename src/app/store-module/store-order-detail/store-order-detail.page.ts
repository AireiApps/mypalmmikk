import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-order-detail',
  templateUrl: './store-order-detail.page.html',
  styleUrls: ['./store-order-detail.page.scss'],
})
export class StoreOrderDetailPage implements OnInit {
  
  userlist = JSON.parse(localStorage.getItem("userlist"));

  recentStore = [];
  storedetail;
  constructor(private service: StoreServiceService, private route: ActivatedRoute) {
    let gradform = this.route.snapshot.paramMap.get("item")
    this.storedetail = JSON.parse(gradform);
    console.log(this.storedetail)
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getStoreOrderDetails()
  }

  ionViewDidEnter() {
    this.getStoreOrderDetails()

  }

  getStoreOrderDetails() {
    let req = {
      "sor_id": this.storedetail.sor_id,
      "millcode": this.userlist.millcode
    }

    this.service.getRecentStoreListDetails(req).then(result => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.recentStore = resultdata.data
      }
    });
  }
}
