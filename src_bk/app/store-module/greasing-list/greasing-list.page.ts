import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greasing-list',
  templateUrl: './greasing-list.page.html',
  styleUrls: ['./greasing-list.page.scss'],
})
export class GreasingListPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));
  greasinglist = [];

  constructor(private router: Router, private service: StoreServiceService, private commonservice: AIREIService) { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    this.getgreasingList();
  }

  ionViewDidEnter() {
    this.getgreasingList();
  }

  getgreasingList() {
    let req = {
      requester_id: this.userlist.userId,
      millcode: this.userlist.millcode
    }

    this.service.getGreasingList(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.greasinglist = resultdata.data
      }else{
        this.greasinglist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });
  }

  btn_AddGreasing() {
    this.router.navigate(["/greasing-add"]);
  }

  btn_View(value) {    
    //this.commonservice.presentToast('Under Development');
    this.router.navigate(["/greasing-view", { item: JSON.stringify(value) }]);
  }

  btn_Edit(value) {
    //this.commonservice.presentToast('Under Development');
    this.router.navigate(["/greasing-edit", { item: JSON.stringify(value) }]);
  }

}
