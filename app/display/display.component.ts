import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { noConflict } from 'q';
import { DataService } from '../data.service';
import { NgImageSliderComponent } from 'ng-image-slider';
import {ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
 


 number:number[]=[];
 i;
 j=0
 no;
 newimage;
 imgno=0;
 count=0;
 no1;
 status;
 array;
 ni;
 original;
 is:boolean=true;
 not:boolean=false;
 details;
 one;
 two;
 three;
 four;
 five;
 var;
 message;
  constructor(private serv:DataService,private router:Router,private sanitizer:DomSanitizer) { 
   
  }
  click(data:NgForm){
    console.log(data.controls["searchrow"].value);
    for(this.i=0;this.i<this.original;this.i++){
      if(this.newimage[this.i].name==data.controls["searchrow"].value){
        this.var=this.newimage[this.i].cid;
        this.display(this.var);
        break;
      }
    }
  }
  disp(){
    console.log("Inside");
    this.router.navigate(['/display']);
    this.not=false;
    this.is=true;
  }
movie(dat:any){
  console.log(dat);
  this.serv.book(dat);
  this.serv.currentMessage.subscribe(message => this.message = message)
}

  display(data:any){
   // data=data-1;
    console.log("data",data);
    let obs=this.serv.detail(data)
    obs.subscribe((response)=>{
     this.details=response;
     console.log("det",this.details);
    //  this.not=true;
    //  this.is=false;
     if(this.details.rating==1){
      console.log("one")
      this.one=true;
      this.two=false;
      this.three=false;
      this.four=false;
      this.five=false;
     }
      if(this.details.rating==2){
        console.log("two")
      this.two=true;
      this.one=false;
      this.three=false;
      this.four=false;
      this.five=false;
      }
      if(this.details.rating==3){
        console.log("three")
        this.four=false;
      this.three=true;
      this.one=false;
      this.two=false;
      this.five=false;
      }
      if(this.details.rating==4){
        console.log("four")
        this.one=false;
      this.two=false;
      this.three=false;
      this.five=false;
      this.four=true;
      
     
      }
      if(this.details.rating==5){
        console.log("five")
        this.one=false;
      this.two=false;
      this.three=false;
      this.four=false;
      this.five=true;
      }

    })
    
    this.not=true;
    this.is=false;

  }
  set(){
    this.is=true;
    this.not=false;
  }
  ngOnInit() {
   
    console.log("Inside");
    //this.router.navigate(['/display']);
   
    let obs=this.serv.display()
    obs.subscribe((response)=>{
     this.newimage=response;
     console.log("Resp",this.newimage)
    // console.log("Resp",this.newimage[5].image)
     console.log("image length",this.newimage.length);
     this.no=this.newimage.length
     this.original=this.newimage.length
     while(this.no>=0){
      this.count=this.count+1;
      this.no=this.no-4
      if(this.no<0){
        this.no1=this.no+4
        console.log("no1",this.no1)
        this.status=true;
        this.array = Array(this.no1).fill(0).map((x,i)=>i);
        console.log("Array",this.array)
        this.ni=this.original-this.no1;
        this.ni=this.ni+1
        console.log("ni",this.ni)
      }
     }
     console.log(this.count);
     for(this.i=0;this.i<this.count-1;this.i++){
       console.log("Inside")
      this.number[this.i]=this.j
      this.j=this.j+4
      console.log("number",this.number)
   }
   
    })

}
}
