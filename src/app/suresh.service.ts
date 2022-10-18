import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SureshService {
  getpayload() {
    throw new Error('Method not implemented.');
  }

url="http://localhost:3000/register"
url1="http://localhost:3000/personaldetails"
url2="http://localhost:3000/Appliedjobs"
  httpCli: any;
  constructor(private http:HttpClient) { }

  getData()
   {
    return this.http.get(this.url);
  }
  usergetData()
   {
    return this.http.get(this.url+'?id='+localStorage.getItem('userId'));
  }
  saveData(data:any){
    return this.http.post(this.url,data)
  }


  deleteUser(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getuserData(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateData(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
  getPersonalData(){
    return this.http.get(this.url1);
  }
  savePersonalUser(data:any){
    return this.http.post(this.url1,data)
  }
//appliedjobs
  getAppliedData(){
    return this.http.get(this.url2)
  }
  saveAppliedData(data:any){
    return this.http.post(this.url2,data)
  }
  getAppliedJobData(userId:string){
    return this.http.get(this.url2+`?userId=${userId}`);
  } 
  getAppliedCountData(userId:string){
    return this.http.get(this.url2+`?userId=${userId}`);

  }
}
