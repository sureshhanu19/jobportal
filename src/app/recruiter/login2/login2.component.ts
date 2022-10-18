import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SureshService } from '../../suresh.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SureshrecService } from 'src/app/sureshrec.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  RloginForm: FormGroup = this.formBuilder.group({
    companyName: ["", [Validators.required]],
    Password: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
  })
  userData: any;
  isSubmitted!: boolean;
  isSubmitted2!: boolean;
  visible:boolean=false;
  changetype:boolean=true;

  constructor(private formBuilder: FormBuilder, private router:Router,private toast:NgToastService,private sureshrec:SureshrecService) { }


  ngOnInit(): void {
    this.sureshrec.CompanygetData().subscribe((result: any) => {
      console.log(result);
      this.userData = result;
    })
  }
 onvisible(){
    this.visible =!this.visible;
    this.changetype=!this.changetype;
  }
  onLogin() {
    if (this.RloginForm.valid) {
      // const loggedInUser= this.userData.find((item:any) =>(item.companyName === this.RloginForm.controls['companyName'].value))
      const ruserProfile= this.userData.find((item:any) =>(item.companyName === this.RloginForm.controls['companyName'].value))
      if (this.userData.some((item: any) => (item.companyName === this.RloginForm.controls['companyName'].value) && (item.password === this.RloginForm.controls['Password'].value))) {
        // this.isSubmitted = true;
       this.toast.success({detail:"Success Message",summary:"Login Successful",duration:2000});
      //  localStorage.setItem('companyName',loggedInUser.companyName);
      //  localStorage.setItem('companyMail',loggedInUser.companyMail);
      //  localStorage.setItem('industryType',loggedInUser.industryType);
      //  localStorage.setItem('yearsofExp',loggedInUser.yearsofExp);
      //  localStorage.setItem('About',loggedInUser.About);
       localStorage.setItem('recId',ruserProfile.id);
       localStorage.setItem('companyName',ruserProfile.companyName);
       

       this.router.navigate(['/recruiter/dashboard'])   
        // alert('Login Successful')
      }
      else if (this.userData.some((item: any) => (item.companyName !== this.RloginForm.controls['companyName'].value))) {
        // this.isSubmitted2 = true;
        
          this.toast.error({detail:"Error Message",summary:"Login failed, Try again",duration:2000})
        
        // alert('User Not Registered , Please Register')
      }
    }
    
  }

  closeAlert() {
    this.isSubmitted = false;
  }
  closeAlert2() {
    this.isSubmitted2 = false;
  }



}
