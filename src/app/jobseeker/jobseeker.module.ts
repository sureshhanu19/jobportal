import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobseekerRoutingModule } from './jobseeker-routing.module';
import { LoginComponent } from './login/login.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { ContentComponent } from './content/content.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { SearchPipe } from './search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ContentComponent,
    AppliedJobsComponent,
     SearchPipe,
    SearchJobsComponent
  ],
  imports: [
    CommonModule,
    JobseekerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgToastModule,
    FormsModule,
  ]
})
export class JobseekerModule { }
