import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import {SlideshowModule} from 'ng-simple-slideshow';
import { Directive, Input, ViewChild} from '@angular/core';
@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})

export class PollingComponent implements OnInit {
 popularImages:any;
 img
 pollimg
 status:boolean=false;
 pollstatus=false;
 alertstatus=false;
 update;
 index;
 @ViewChild('slideshow',{static: false}) slide:any;
  constructor(private service:DataService) { }
  imgg(){
    console.log("hfbjdfbjfbd")
   // this.slide.OnIndexChange()
    console.log(this.slide.slideIndex, this.slide)
    this.index=this.slide.slideIndex
    var ob=this.service.imgpoll(this.slide.slideIndex)
    ob.subscribe((response) => {
  this.pollimg=response
  console.log("pollimg",this.pollimg.poll)
  this.status=true;
    })
  }
  poll(){
    if(this.pollstatus==true){
      alert("You have already polled")
      this.status=false;
      
    }else{
    this.pollimg.poll=this.pollimg.poll+1;
    console.log("poll",this.pollimg.poll)
   
    this.pollstatus=true;
    }
    var obs1 = this.service.pollupdate(this.pollimg.poll,this.index);

    obs1.subscribe((response) => {
      this.update = response;
     
      console.log("res",this.update)

    })
  }
  ngOnInit() {
    console.log("ngoninit poll")
    var obs2 = this.service.popularimage();

    obs2.subscribe((response) => {
      this.img = response;
      this.popularImages=this.img.url;
      //console.log("res",this.popularImages.url)

    })
  }

}
