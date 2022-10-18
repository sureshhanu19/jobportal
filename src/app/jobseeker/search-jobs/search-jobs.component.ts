import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { SureshService } from 'src/app/suresh.service';
import { SureshrecService } from 'src/app/sureshrec.service';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {
searchText:any;
jobdata:any=[];
email:any;
isapplied:boolean=false;
isapply:boolean=true;
username: any;
phone: any;
experience:any;
userId:any=[''];
 
  constructor(private sureshrec:SureshrecService, private suresh:SureshService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem('userId');
    
    this.sureshrec.getJobData().subscribe((result)=>{
      console.log(result);
      this.jobdata=result;

      this.suresh.usergetData().subscribe((data:any)=>{
        this.username = data[0].name;
        this.email = data[0].email;
        this.phone = data[0].phone;
         this.experience = data[0].experience;
     
      })
     
     
      
    })
  }
  onapply(item:any){
      this.suresh.saveAppliedData({...item,email:this.email,userId:this.userId,phone:this.phone,experience:this.experience}).subscribe((result)=>{
      this.toast.success({ detail: 'Success!!', summary: 'You have applied successfully', duration: 3000 });
      this.isapplied=true;
      this.isapply=false;
      })
      
    }


  }


