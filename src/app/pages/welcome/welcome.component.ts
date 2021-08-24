import { Component, OnInit } from '@angular/core';
import { Common } from 'src/app/models/common';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers:[CommonService]
})
export class WelcomeComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  public commons:Common={app_count:0,doc_count:0,pat_count:0};

  ngOnInit() {
    this.commonService.getCounts().subscribe(data=>{ 
      this.commons=data;
    });
    
  }

  ngAfterViewChecked(){

    
  }
  
}
