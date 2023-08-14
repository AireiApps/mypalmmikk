import { Component, OnInit } from '@angular/core';
import { AIREIService } from 'src/app/api/api.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ManagerServiceService } from 'src/app/services/manager-service/manager-service.service';

@Component({
  selector: 'app-managermaintenancecomments',
  templateUrl: './managermaintenancecomments.page.html',
  styleUrls: ['./managermaintenancecomments.page.scss'],
})
export class ManagermaintenancecommentsPage implements OnInit {

  detailArr = [];
  userlist = JSON.parse(localStorage.getItem("userlist"));
  detailValue;
  taskid;
  maintenacecomments="";
  engineercomments="";
  managercomments="";
  ceocomments="";
  comments="";
  commentsForm;

  constructor(private fb: FormBuilder, private commonservice: AIREIService, private route: ActivatedRoute, private router: Router, private service: ManagerServiceService) { 
    let detailform = this.route.snapshot.paramMap.get("item");
    this.detailValue = JSON.parse(detailform);
    this.taskid = this.detailValue.id;
    if(this.detailValue.overall_manager_comments!='')
    {
      this.comments=this.detailValue.overall_manager_comments;
    }

    if(this.detailValue.overallComments!='')
    {
      this.maintenacecomments=this.detailValue.overallComments;
    }
    
    if(this.detailValue.overall_engineer_comments!='')
    {
      this.engineercomments=this.detailValue.overall_engineer_comments;
    }

    if(this.detailValue.overall_manager_comments!='')
    {
      this.managercomments=this.detailValue.overall_manager_comments;
    }

    if(this.detailValue.overall_ceo_comments!='')
    {
      this.ceocomments=this.detailValue.overall_ceo_comments;
    }

    //console.log(this.taskid);

    this.commentsForm = this.fb.group({
      tatask: new FormControl(this.detailValue.comments),
      tamaintenancecomments: new FormControl(this.maintenacecomments),
      taengineercomments: new FormControl(this.engineercomments),
      tamanagercomments: new FormControl(this.managercomments),
      taceocomments: new FormControl(this.ceocomments),
      taComments: new FormControl(this.comments)
    });
  }

  ngOnInit() {
  }

  btn_save()
  {
    const req = {      
      id: this.taskid,
      user_id: this.userlist.userId,
      role_id: this.userlist.userRoleId,
      millcode: this.userlist.millcode, 
      MaintainenceReportHeadingId: this.detailValue.id,
      task: this.detailValue.comments,       
      comments: this.commentsForm.value.taComments+'~'
    };

    console.log(req);

    this.service.saveMaintenanceComments(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        
        this.commonservice.presentToast("Saved Successfully!");

        this.router.navigate(["/managermaintenancereport"]);

      } else {
        this.commonservice.presentToast("Saved Failed!");
      }        
    });
  }

}
