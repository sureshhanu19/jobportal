import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SureshrecService {
  
  url3="http://localhost:3500/recuiterDetails"
  url4="http://localhost:3500/jobData"
  url5="http://localhost:3500/WhoApplied"

  constructor(private http:HttpClient) { }
//Recruiter Register Data
  CompanygetData()
  {
   return this.http.get(this.url3);
 }
 ComapanysaveData(data:any){
   return this.http.post(this.url3,data)
 } 

 //Recruiter Job Post Details

 getJobData(){
  return this.http.get(this.url4);
 }
 getRecData(){
  return this.http.get(this.url3+'?id='+localStorage.getItem('recId'));
 }
 saveJobData(data:any){
  return this.http.post(this.url4,data);
 }
 getPostedJobData(recId:string){
  return this.http.get(this.url4+`?recId=${recId}`);
 }

 //who Applied
saveWhoApplied(data:any){
  return this.http.post(this.url5,data);
}

// posted jobs count
getjobpostedcount(recId:string){
  return this.http.get(this.url4+`?recId=${recId}`);

}

}
