import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Login2Component } from './login2/login2.component';
import { PostJobComponent } from './post-job/post-job.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { Register2Component } from './register2/register2.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule } from 'ng-angular-popup';
import { RecprofileComponent } from './recprofile/recprofile.component';
import { RecMsgComponent } from './rec-msg/rec-msg.component';


@NgModule({
  declarations: [
    Login2Component,
    Register2Component,
    DashbordComponent,
    PostJobComponent,
    PostedJobsComponent,
    RecprofileComponent,
    RecMsgComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgToastModule,
    FormsModule,
  ]
})
export class RecruiterModule { }
