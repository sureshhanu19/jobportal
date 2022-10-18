import { Component, OnInit } from '@angular/core';
import { SureshService } from 'src/app/suresh.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: any;
  email: any;
  phone: any;
  type: any;
  gender: any;
  dob: any;
  maritalStatus:any;
  hometown:any;
  experience:any;
  interests:any;
  nationality:any;
  currentLocation:any;
  languages:any;
  lastjobexp:any;
  lastjobDesig:any;
  reasonsforleaving:any;



  constructor(private suresh:SureshService) { }

  ngOnInit(): void {
    this.suresh.usergetData().subscribe((data:any)=>{
      this.username = data[0].name;
      this.email = data[0].email;
      this.phone = data[0].phone;
      this.gender = data[0].gender;
      this.type = data[0].type;
      this.dob = data[0].dob;
      this.maritalStatus = data[0].maritalStatus;
      this.hometown = data[0].hometown;
      this.experience = data[0].experience;
      this.interests = data[0].interests;
      this.nationality = data[0].nationality;
      this.currentLocation = data[0].currentLocation;
      this.languages = data[0].languages;
      this.lastjobexp = data[0].lastjobexp;
      this.lastjobDesig = data[0].lastjobDesig;
      this.reasonsforleaving = data[0].reasonsforleaving;
    })
   
    
    
   
  }
 
}
