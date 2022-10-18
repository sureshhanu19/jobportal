import { Component, OnInit } from '@angular/core';
import { SureshService } from 'src/app/suresh.service';


@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {
  appliedJobData:any
  constructor(private suresh:SureshService) { }

  ngOnInit(): void {
    // this.suresh.getAppliedData().subscribe((result:any)=>{
    //   console.log(result);
    //   this.appliedJobData=result;
    // })
    this.getAppliedJobs();  
  }
getAppliedJobs(){
  this.suresh.getAppliedJobData(localStorage.getItem('userId')as string)
  .subscribe(data=>{
    this.appliedJobData = data;
  })
}
}
