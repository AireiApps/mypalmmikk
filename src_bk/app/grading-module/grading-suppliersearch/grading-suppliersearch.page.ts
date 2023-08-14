import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { GradingServiceService } from 'src/app/services/grading-service/grading-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grading-suppliersearch',
  templateUrl: './grading-suppliersearch.page.html',
  styleUrls: ['./grading-suppliersearch.page.scss'],
})
export class GradingSuppliersearchPage implements OnInit {

  @ViewChild('search', {static:false}) search: IonSearchbar;

  userlist = JSON.parse(localStorage.getItem("userlist"));


  supplierlistArray = [];
  searchtext='';

  constructor(private service: GradingServiceService, private router: Router) {}

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
      millcode: this.userlist.millcode
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

    /*const val = event.target.value;

    this.searchedItem = this.supplierlistArray;    

    if(val && val.trim() !='')
    {            

      this.searchedItem = this.searchedItem.filter((item: any) => 
      {

        console.log(item.suppler_name.toLowerCase());

        return (item.suppler_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }*/
  }

  getvalue(getitem)
  {
    //localStorage.setItem("supplierdetails", JSON.stringify(getitem));

    //this.router.navigate(['/tabs/tabsgrading']);

    //this.router.navigateByUrl("tabs/tabmanualgrading");

    this.router.navigate(['/grading-manualform', { item: JSON.stringify(getitem) }]);

    //console.log(item);
  }
}
