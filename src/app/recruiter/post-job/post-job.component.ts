import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

import { NgToastService } from 'ng-angular-popup';
import { SureshrecService } from 'src/app/sureshrec.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  
  postForm!:FormGroup
  constructor(private formBuilder:FormBuilder, private sureshrec:SureshrecService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      jobtitle:["",Validators.required],
      joblocation:["",Validators.required],
      jdesc:["",Validators.required],
      skills:["",Validators.required],
      recId:['']
    })
  }

  onPost(){
    if (this.postForm.valid){
      this.postForm.controls['recId'].setValue(localStorage.getItem("recId"))
      this.sureshrec.saveJobData(this.postForm.value).subscribe((result) => {
        this.toast.success({ detail: 'Success!', summary: 'You have succesfully posted a job', duration: 3000 });
        this.postForm.reset({});
      })
    }
   
  }

}
