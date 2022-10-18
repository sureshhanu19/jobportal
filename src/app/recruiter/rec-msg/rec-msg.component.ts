import { Component, OnInit } from '@angular/core';
import { SureshService } from 'src/app/suresh.service';
import { SureshrecService } from 'src/app/sureshrec.service';

@Component({
  selector: 'app-rec-msg',
  templateUrl: './rec-msg.component.html',
  styleUrls: ['./rec-msg.component.css']
})
export class RecMsgComponent implements OnInit {
userData:any;
appliedData:any;
recJobData:any;
showHide:boolean=false;
jobtitle:any;
  constructor(private suresh:SureshService,private sureshrec:SureshrecService) { }

  ngOnInit(): void {
    this.suresh.getData().subscribe((result)=>{
      console.log(result);
      this.userData=result;
    })
    this.sureshrec.getJobData().subscribe((result)=>{
      console.log(result);
      this.recJobData=result;
    })
    this.suresh.getAppliedData().subscribe((result)=>{
      console.log(result);
      this.appliedData=result;
    })
  }
  onclick(){
    this.showHide=true
  }

}
