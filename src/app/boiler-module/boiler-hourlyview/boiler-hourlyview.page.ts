import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { appsettings } from 'src/app/appsettings';
import { BoilerServiceService } from 'src/app/services/boiler-service/boiler-service.service';
import { HttpserviceService } from 'src/app/services/httpservice/httpservice.service';
import { AIREIService } from 'src/app/api/api.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-boiler-hourlyview',
  templateUrl: './boiler-hourlyview.page.html',
  styleUrls: ['./boiler-hourlyview.page.scss'],
})
export class BoilerHourlyviewPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  frequencyForm;
  params;

  constructor(private router: Router, private fb: FormBuilder, private commonservice: AIREIService, private service: BoilerServiceService, private route: ActivatedRoute, private httpservice: HttpserviceService) {
    
    let viewform = this.route.snapshot.paramMap.get("item");
    this.params = JSON.parse(viewform);
    console.log(this.params);      
   }

  ngOnInit() {
  }

}
