import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SelectorComponent } from './home/selector/selector.component';



const routes: Routes = [
 {
  path: 'jobseeker', loadChildren: () => import('./jobseeker/jobseeker.module')
  .then(mod => mod.JobseekerModule)
 },
 {
  path: 'recruiter',loadChildren: () => import('./recruiter/recruiter.module')
  .then(mod => mod.RecruiterModule
    )
 },
 {path:'', redirectTo:'home', pathMatch:'full'},
 {path:'home', component:HomeComponent},
 {path:'selector', component:SelectorComponent},
 {path:'header',component:HeaderComponent},
 {path:'footer',component:FooterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
