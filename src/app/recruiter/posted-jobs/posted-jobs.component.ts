import { Component, OnInit } from '@angular/core';
import { SureshService } from 'src/app/suresh.service';
import { SureshrecService } from 'src/app/sureshrec.service';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.css']
})
export class PostedJobsComponent implements OnInit {
 
  RjobData:any;
  recData:any;
  jobId:any;

  constructor(private suresh:SureshService,private sureshrec:SureshrecService) { }

  ngOnInit(): void {
    this.getPostedJob();
  }
getPostedJob(){
  this.sureshrec.getPostedJobData(localStorage.getItem('recId')as string).subscribe(data=>{
    this.RjobData=data;
  })
}
}
