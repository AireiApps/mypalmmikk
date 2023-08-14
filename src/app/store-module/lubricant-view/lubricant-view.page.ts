import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { AIREIService } from 'src/app/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lubricant-view',
  templateUrl: './lubricant-view.page.html',
  styleUrls: ['./lubricant-view.page.scss'],
})
export class LubricantViewPage implements OnInit {

  lubricantdetailForm;
  machinelist = [];
  params;
  userlist = JSON.parse(localStorage.getItem("userlist"));
  getyear;
  getmonth;
  getweek;
  boolgreasing=false;
  boolgearboxoil=false;
  boolhydrateoil=false;
  boolcompressoroil=false;

  constructor(private fb: FormBuilder, private service: StoreServiceService, private commonservice: AIREIService, private route: ActivatedRoute) {
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);    

    if(this.params.chkGreasing==1)
    {
      this.boolgreasing=true;
    }

    if(this.params.chkGearBoxOil==1)
    {
      this.boolgearboxoil=true;
    }

    if(this.params.chkHydralicOil==1)
    {
      this.boolhydrateoil=true;
    }

    if(this.params.chkCompressorOil==1)
    {
      this.boolcompressoroil=true;
    }

    //console.log(this.boolgreasing+'\n'+this.boolgearboxoil+'\n'+this.boolhydrateoil+'\n'+ this.boolcompressoroil);

    this.lubricantdetailForm = this.fb.group({
      year: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required),
      week: new FormControl('', Validators.required),      
      greasing: new FormControl(this.boolgreasing),
      gearboxoil: new FormControl(this.boolgearboxoil),
      hydrateroil: new FormControl(this.boolhydrateoil),
      compressoroil: new FormControl(this.boolcompressoroil)
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
    this.getLubricationView();
  }

  getLubricationView() {
    let req = {
      lubrication_id: this.params.lubrication_id,
      millcode: this.userlist.millcode
    }

    console.log(req);

    this.service.getLubricationView(req).then(result => {
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
