import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { SureshService } from '../../suresh.service';
import { SureshrecService } from 'src/app/sureshrec.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  RecruiterRegisterForm!:FormGroup;
  registrationsuccess:any;
  regisfail:any;
  regisserver:any;
  userData: any;
  constructor(private router:Router,private fb:FormBuilder,private sureshrec:SureshrecService) { }

  ngOnInit(): void {
    this.RecruiterRegisterForm=this.fb.group({
      companyName: ['',Validators.required],
      password: ['',Validators.required],
      companyMail:['',Validators.required],
      industryType:['',Validators.required],
      yearsofExp: ['',Validators.required],
      About: ['',Validators.required]
      });

      this.sureshrec.CompanygetData().subscribe((result: any) => {
        console.log(result);
        this.userData = result;
      })
  }
  collectUser() {
    debugger
    if (this.RecruiterRegisterForm.valid) {
      if (this.userData.some((item: any) => item.companyName === this.RecruiterRegisterForm.controls['companyName'].value)) {
        alert('User already exists');
        return;
      }
      this.sureshrec.ComapanysaveData(this.RecruiterRegisterForm.value).subscribe((result) => {
        this.RecruiterRegisterForm.reset({});
        this.router.navigate(['login2'])
      })
    }

  }

}
