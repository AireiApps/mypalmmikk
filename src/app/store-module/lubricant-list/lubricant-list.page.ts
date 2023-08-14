import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lubricant-list',
  templateUrl: './lubricant-list.page.html',
  styleUrls: ['./lubricant-list.page.scss'],
})
export class LubricantListPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  lubricantlist = [];

  constructor(private router: Router, private service: StoreServiceService, private commonservice: AIREIService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getlubricantList();
  }

  ionViewDidEnter() {
    this.getlubricantList();
  }

  getlubricantList() {
    let req = {
      requester_id: this.userlist.userId,
      millcode: this.userlist.millcode
    }

    this.service.getLubricantList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.lubricantlist = resultdata.data
      }else{
        this.lubricantlist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });
  }

  btn_AddLubricant() {
    this.router.navigate(["/lubricant-add"]);
  }

  btn_View(value) {    
    //this.commonservice.presentToast('Under Development');
    this.router.navigate(["/lubricant-view", { item: JSON.stringify(value) }]);
  }

  btn_Edit(value) {
    //this.commonservice.presentToast('Under Development');
    this.router.navigate(["/lubricant-edit", { item: JSON.stringify(value) }]);
  }

}
