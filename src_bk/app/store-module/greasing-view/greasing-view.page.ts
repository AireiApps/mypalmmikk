import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greasing-view',
  templateUrl: './greasing-view.page.html',
  styleUrls: ['./greasing-view.page.scss'],
})
export class GreasingViewPage implements OnInit {

  greasingdetailForm;
  machinelist = [];
  params;
  userlist = JSON.parse(localStorage.getItem("userlist"));
  getyear;
  getmonth;
  getweek;

  constructor(private fb: FormBuilder, private service: StoreServiceService, private commonservice: AIREIService, private route: ActivatedRoute) { 
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);

    this.greasingdetailForm = this.fb.group({
      year: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required),
      week: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getyear = this.params.year;
    this.getmonth = this.params.month;
    this.getweek = this.params.week;
    this.callAPI();
  }

  ionViewDidEnter() {
    this.getyear = this.params.year;
    this.getmonth = this.params.month;
    this.getweek = this.params.week;
    this.callAPI();
  }


  callAPI() {
    this.getGreasingView();
  }

  getGreasingView() {
    let req = {
      greasing_id: this.params.greasing_id,
      millcode: this.userlist.millcode
    }

    //console.log(req);

    this.service.getGreasingView(req).then(result => {
      var resultdata: any;
      resultdata = result;      
      if (resultdata.httpcode == 200) {
        this.machinelist = resultdata.data        
      }else{
        this.machinelist = []
        this.commonservice.presentToast('No Record Found!')
      }
    });

  }



}
