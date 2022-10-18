import { Component, OnInit } from '@angular/core';
import { SureshrecService } from 'src/app/sureshrec.service';

@Component({
  selector: 'app-recprofile',
  templateUrl: './recprofile.component.html',
  styleUrls: ['./recprofile.component.css']
})
export class RecprofileComponent implements OnInit {
  companyName: any;
  companyMail: any;
  industryType: any;
  yearsofExp: any;
  About: any;

  constructor(
    private recService: SureshrecService
  ) { }

  ngOnInit(): void {
    this.recService.getRecData()
      .subscribe(
        (data: any) => {
          this.companyName = data[0].companyName;
          this.companyMail = data[0].companyMail;
          this.industryType = data[0].industryType;
          this.yearsofExp = data[0].yearsofExp;
          this.About = data[0].About;
        }
      )
  }

}
