import { Component, OnInit } from '@angular/core';
import { SureshrecService } from 'src/app/sureshrec.service';
import { SureshService } from '../../suresh.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
 
  username:any;
  isdashboard:boolean=true;
  ispost:boolean=false;
  isposted:boolean=false;
  isMessage:boolean=false;
  isprofile:boolean=false;
  jobposted:any;

  constructor(private suresh:SureshService,private sureshrec:SureshrecService) { }

  userData:any=[];
    ngOnInit(): void {
      this.sureshrec.getjobpostedcount(localStorage.getItem('recId') as string)
      .subscribe((res:any)=>{
        this.jobposted=Object.keys(res).length;
      })
      this.username = localStorage.getItem('companyName');
    }
   
    onDashboard(){
      this.isdashboard=true;
      this.ispost=false;
      this.isposted=false;
      this.isMessage=false;
      this.isprofile=false;
    }  
    onPost(){
      this.ispost=true;
      this.isdashboard=false;
      this.isposted=false;
      this.isMessage=false;
      this.isprofile=false;
    }
   
    onPostedJobs(){
      this.isdashboard=false
      this.isposted=true;
      this.ispost=false;
      this.isMessage=false;
      this.isprofile=false;
}    
onMessage(){
  this.isMessage=true;
  this.ispost=false;
  this.isdashboard=false;
  this.isposted=false;
  this.isprofile=false;
}
onprofile(){
  this.isprofile=true;
  this.isMessage=false;
  this.ispost=false;
  this.isdashboard=false;
  this.isposted=false;
}

   
}
