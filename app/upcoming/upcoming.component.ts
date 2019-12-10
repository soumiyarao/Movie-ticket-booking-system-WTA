import { Component, OnInit } from '@angular/core';

declare function w3_close(): any; 
declare function w3_open(): any; 
declare function onClick(ele): any; 


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

}
