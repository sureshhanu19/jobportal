import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SureshService } from '../../suresh.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    loginEmail: ["", [Validators.required, Validators.email]],
    loginPass: ["", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]]
  })
  userData: any;
  isSubmitted!: boolean;
  isSubmitted2!: boolean;
  
  constructor(private suresh:SureshService,private formBuilder: FormBuilder, private router:Router,private toast:NgToastService) { }
  
  ngOnInit(): void {
    this.suresh.getData().subscribe((result: any) => {
      console.log(result);
      this.userData = result;
    })
    
  }
  onLogin() {
    if (this.loginForm.valid) {
      const loggedInUser= this.userData.find((item:any) =>(item.email === this.loginForm.controls['loginEmail'].value))
      // const userProfile = this.userData.find((item:any) => (item.email === this.loginForm.controls['loginEmail'].value))
      if (this.userData.some((item: any) => (item.email === this.loginForm.controls['loginEmail'].value) && (item.password === this.loginForm.controls['loginPass'].value))) {
        // this.isSubmitted = true;
       this.toast.success({detail:"Success Message",summary:"Login Successful",duration:2000});
       localStorage.setItem('loggedInUserName',loggedInUser.name);
       localStorage.setItem('userId',loggedInUser.id);

      //  localStorage.setItem('email',loggedInUser.email);
      //  localStorage.setItem('phone',loggedInUser.phone);
      //  localStorage.setItem('dob',loggedInUser.dob);
      //  localStorage.setItem('gender',loggedInUser.gender);
      //  localStorage.setItem('maritalStatus',loggedInUser.maritalStatus);
      //  localStorage.setItem('hometown',loggedInUser.hometown);
      //  localStorage.setItem('type',loggedInUser.type);
      //  localStorage.setItem('experience',loggedInUser.experience);
      //  localStorage.setItem('interests',loggedInUser.interests);
      //  localStorage.setItem('nationality',loggedInUser.nationality);
      //  localStorage.setItem('currentLocation',loggedInUser.currentLocation);
      //  localStorage.setItem('languages',loggedInUser.languages);
      //  localStorage.setItem('lastjobexp',loggedInUser.lastjobexp);
      //  localStorage.setItem('lastjobDesig',loggedInUser.lastjobDesig);
      //  localStorage.setItem('reasonsforleaving',loggedInUser.reasonsforleaving);
       
       this.router.navigate(['/jobseeker/content'])   
        // alert('Login Successful')
      }
      else if (this.userData.some((item: { email: any; }) => (item.email !== this.loginForm.controls['loginEmail'].value))) {
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
