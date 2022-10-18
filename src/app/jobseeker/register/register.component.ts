import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SureshService } from '../../suresh.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  isSubmitted: boolean = false;
  userData: any=[];

  constructor(private formBuilder: FormBuilder,private router:Router,private suresh: SureshService) { }

  ngOnInit(): void {
    const date = new Date(this.registerForm.controls['dob'].value.year, this.registerForm.controls['dob'].value.month-1, this.registerForm.controls['dob'].value.day);
      this.registerForm.controls['dob'].setValue(date)
    this.suresh.getData().subscribe((result: any) => {
      console.log(result);
      this.userData = result;
    })
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/(7|8|9)\d{9,9}$/)]],
      dob:[''],
      type: ['', [Validators.required]],
      gender: ['',Validators.required],
      maritalStatus: ['',[Validators.required]],
      hometown:['',[Validators.required]],
      experience:[''],
      interests:[''],
      nationality:[''],
      languages:[''],
      currentLocation:[''],
      lastjobexp:[''],
      lastjobDesig:[''],
      department:[''],
      reasonsforleaving:[''],
      

    })
  }
  collectUser() {
    debugger
    if (this.registerForm.valid) {
      if (this.userData.some((item: any) => item.email === this.registerForm.controls['email'].value)) {
        alert('User already exists');
        return;
      }
      this.suresh.saveData(this.registerForm.value).subscribe((result) => {
        this.isSubmitted = true;
        this.registerForm.reset({});
        this.router.navigate(['/jobjeeker/login'])
      })
    }

  }
  onDateSelect(event: any) {
    console.log(event)
    const date = new Date(event.year, event.month - 1, event.day);
    console.log(date)
  }

  closeAlert() {
    this.isSubmitted = false;
  }

}
  


