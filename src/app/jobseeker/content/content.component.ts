import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SureshService } from 'src/app/suresh.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

 
  // searchText! : string;
  // sideNavStatus: boolean = false;
  username: any;
  isdashboard: boolean=true;
  isProfile: boolean=false;
  email: any;
  isSearch: boolean=false;
  isAppliedJobs:boolean=false;
  jobCount:any;
  
  constructor(private suresh:SureshService) { 
    
  }


userData:any=[];
  ngOnInit(): void {
    this.username = localStorage.getItem('loggedInUserName');
    // this.suresh.getData().subscribe((result)=>{
    //   console.warn(result)
    //   this.collection=result
    // })

    this.suresh.getAppliedCountData(localStorage.getItem('userId') as string)
    .subscribe((res:any)=>{
      this.jobCount=Object.keys(res).length;
    })
  }

  ondashboard() {
    this.isdashboard=true;
    this.isProfile=false;
    this.isAppliedJobs=false;
    this.isSearch=false;
  }
  onProfile(){
    this.isProfile=true;
    this.isdashboard=false;
    this.isAppliedJobs=false;
    this.isSearch=false;
  }

  onSearch(){
    this.isSearch=true;
    this.isProfile=false;
    this.isdashboard=false;
    this.isAppliedJobs=false;
  }

  onApplied(){
    this.isAppliedJobs=true;
    this.isSearch=false;
    this.isProfile=false;
    this.isdashboard=false;
  }
  // deleteUser(user:any){
  //   this.userData.splice(user-1,1);
  //   this.suresh.deleteUser(user).subscribe((result: any)=>{
  //     console.warn("result",result)
  //   })
  // }
  

  // closeAlert() {
  //   this.isSubmitted = false;
  // }
  // closeAlert2() {
  //   this.isSubmitted2 = false;
  // }
  
}
