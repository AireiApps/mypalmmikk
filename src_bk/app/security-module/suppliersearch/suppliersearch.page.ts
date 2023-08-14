import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { SecurityServiceService } from 'src/app/services/security-service/security-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliersearch',
  templateUrl: './suppliersearch.page.html',
  styleUrls: ['./suppliersearch.page.scss'],
})
export class SuppliersearchPage implements OnInit {

  @ViewChild('search', {static:false}) search: IonSearchbar;

  userlist = JSON.parse(localStorage.getItem("userlist"));


  supplierlistArray = [];
  searchtext='';

  constructor(private service: SecurityServiceService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    setTimeout(()=>{
      this.search.setFocus();
    });

    this.getSupplier();
  }

  getSupplier() {
    const req = {
      millcode: this.userlist.millcode,
      from: "ffbreceive"
    };

    this.service.getSupplierList(req).then((result) => {
      let resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.supplierlistArray = resultdata.data;
      }
    });
  }

  _ionchange(event)
  {
    this.searchtext = event.detail.value;
  }

  getvalue(getitem)
  {
    //localStorage.setItem("supplierdetails", JSON.stringify(getitem));

    //this.router.navigate(['/tabs/tabsgrading']);

    //this.router.navigateByUrl("tabs/tabmanualgrading");

    console.log(getitem);

    this.router.navigate(['/manualffbform', { item: JSON.stringify(getitem) }]);

    //console.log(item);
  }
}
