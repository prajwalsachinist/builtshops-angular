import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent implements OnInit {

  constructor() { }

  ngOnInit(){}
  
  id:any = '';
  question(ids:any){
    if(this.id == ids){
      this.id= '';
    }
    else{
      this.id = ids;
    }
  }

}
