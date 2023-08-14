import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { HttpserviceService } from "../../services/httpservice/httpservice.service";
import { StoreServiceService } from 'src/app/services/store-service/store-service.service';
import { Router } from "@angular/router";
import { AIREIService } from "src/app/api/api.service";

@Component({
  selector: 'app-maintenancereport',
  templateUrl: './maintenancereport.page.html',
  styleUrls: ['./maintenancereport.page.scss'],
})
export class MaintenancereportPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  maintenancereportForm;

  maintenanceheadingsArr = [];

  constructor(private router: Router, private fb: FormBuilder, private commonservice: AIREIService, private service: StoreServiceService, private httpservice: HttpserviceService) {

    this.maintenancereportForm = this.fb.group({
      select_head: new FormControl('', Validators.required),      
      tatask: new FormControl('', Validators.required),
      tacomments: new FormControl(''),
      commentsitemRows: this.fb.array([])     
    });

   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.httpservice.getContactLogin();
    this.getReportHead();
  }

  ionViewDidEnter() {
    this.httpservice.getContactLogin();
    this.getReportHead();    
  }

  getReportHead() {
    const req = {
      user_id: this.userlist.userId,
      millcode: this.userlist.millcode
    };    
    
    this.service.getMaintenanceHeadings(req).then(result => {
        let resultdata: any;
        resultdata = result;
        // this.profileForm.reset();
        
        if (resultdata.httpcode == 200) {
          this.maintenanceheadingsArr = resultdata.data;
          console.log(resultdata.data);
        }
    });
  }

  parseString(item) {
    return JSON.stringify(item);
  }

  get formArr() {
    return this.maintenancereportForm.get('commentsitemRows') as FormArray;
  }
  
  initItemRows(value) {
    return this.fb.group({
      select_head: new FormControl(value.select_head, Validators.required),
      tatask: new FormControl(value.tatask, Validators.required),
      tacomments: new FormControl(value.tacomments)
    });
  }

  addNewRow() {
    if(this.maintenancereportForm.valid)
    {              
        this.formArr.push(this.initItemRows(this.maintenancereportForm.value));
        this.maintenancereportForm.controls.select_head.setValue('');         
        this.maintenancereportForm.controls.tatask.setValue('');      
        this.maintenancereportForm.controls.tacomments.setValue(''); 
    }else
    {
      this.commonservice.presentToast('Please Fill the Form!');
    }
  }

  getItembyKey(key, itemRow, param) {
    const eachitem = JSON.parse(itemRow.get(key).value);    
    return eachitem[param];
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  btn_save()
  {
    let heading_Arr = [];
    let task_Arr = [];
    let comments_Arr = [];

    const commentscontrol = (
      this.maintenancereportForm.get('commentsitemRows')
    )

    for (let i = 0; i < commentscontrol.length; i++) 
    {
      const controlsub = <FormGroup>(
      this.maintenancereportForm.get(['commentsitemRows', i])
      );

      const eachheadings = JSON.parse(controlsub.get('select_head').value);
      const eachtask = controlsub.get('tatask').value;
      const eachcomments = controlsub.get('tacomments').value;

      heading_Arr.push(eachheadings.id);
      task_Arr.push(eachtask);
      comments_Arr.push(eachcomments);
    }

    const req = {
      id:0,      
      user_id: this.userlist.userId,
      role_id: this.userlist.userRoleId,
      millcode: this.userlist.millcode,
      MaintainenceReportHeadingId: heading_Arr.join("~"),
      task: task_Arr.join("~"),
      comments: comments_Arr.join("~")
      //overall_comments: this.maintenancereportForm.value.tacomments
    };

    console.log(req);

    this.service.saveMaintenanceReport(req).then(result => {
      var resultdata: any;
      resultdata = result;      

      if (resultdata.httpcode == 200) {
        this.commonservice.presentToast('Saved Successfully!');

        const commentsarr = <FormArray>this.maintenancereportForm.controls.commentsitemRows;
        while (commentsarr.length) {
          commentsarr.removeAt(commentsarr.length - 1);
        }
        
        //this.getReportHead();

        this.router.navigate(['/tabs/tabmaintenance']);        

      } else {
        this.commonservice.presentToast('Saved Failed!');
      }
    });

  }

}
