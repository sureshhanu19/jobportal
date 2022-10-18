import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Login2Component } from './login2/login2.component';
import { PostJobComponent } from './post-job/post-job.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { RecprofileComponent } from './recprofile/recprofile.component';
import { Register2Component } from './register2/register2.component';

const routes: Routes = [
  {path:'dashboard',component:DashbordComponent},
  {path:'login2',component:Login2Component},
  {path:'postjob',component:PostJobComponent},
  {path:'postedjobs',component:PostedJobsComponent},
  {path:'register2',component:Register2Component},
  {path:'recprofile',component:RecprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
