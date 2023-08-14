import { Component, OnInit } from '@angular/core';
import { AIREIService } from 'src/app/api/api.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EngineerServiceService } from 'src/app/services/engineer-service/engineer-service.service';

@Component({
  selector: 'app-engineerproductioncomments',
  templateUrl: './engineerproductioncomments.page.html',
  styleUrls: ['./engineerproductioncomments.page.scss'],
})
export class EngineerproductioncommentsPage implements OnInit {

  detailArr = [];
  userlist = JSON.parse(localStorage.getItem("userlist"));
  detailValue;
  taskid;
  supervisorcomments="";
  engineercomments="";
  managercomments="";
  ceocomments="";
  comments="";
  commentsForm;

  constructor(private fb: FormBuilder, private commonservice: AIREIService, private route: ActivatedRoute, private router: Router, private service: EngineerServiceService) {
    let detailform = this.route.snapshot.paramMap.get("item");
    this.detailValue = JSON.parse(detailform);
    this.taskid = this.detailValue.id;
    if(this.detailValue.overall_engineer_comments!='')
    {
      this.comments=this.detailValue.overall_engineer_comments;
    }

    if(this.detailValue.overallComments!='')
    {
      this.supervisorcomments=this.detailValue.overallComments;
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

    this.commentsForm = this.fb.group({
      tatask: new FormControl(this.detailValue.comments),
      tasupervisorcomments: new FormControl(this.supervisorcomments),
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
      DailyReportHeadingId: this.detailValue.id,
      task: this.detailValue.comments,       
      comments: this.commentsForm.value.taComments+'~'
    };

    console.log(req);

    this.service.saveProductionComments(req).then((result) => {
      var resultdata: any;
      resultdata = result;
      if (resultdata.httpcode == 200) {
        
        this.commonservice.presentToast("Saved Successfully!");

        this.router.navigate(["/engineerproductionreport"]);

      } else {
        this.commonservice.presentToast("Saved Failed!");
      }        
    });
  }

}
