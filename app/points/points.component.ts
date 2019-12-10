import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
declare function active(id):any;
declare function deact(id):any;
@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})


export class PointsComponent implements OnInit {
email1
message
detpoint
order:string[]=[];
sum=0;
i=0;
j=0;
data:string[]=[]
k=0;
stat:boolean=false;
final;
res;
emailFound:boolean=false;
emailNotFound:boolean=false;
  constructor(private serv:DataService,private rout:Router,private snak:MatSnackBar) { }
  image(dat:any,name:any,point:any){
    console.log("dat",dat,name,point)
    this.order[this.j++]=name;
    this.data[this.k++]=dat;
    this.sum=this.sum+parseInt(point);
    console.log(this.order,this.sum,this.data)
    active(dat)
  }

  place(){
    if(this.sum>this.detpoint.point){
      alert("You have limited points")
      this.sum=0;
      this.order.splice(0,this.order.length);
      console.log("arrr",this.order);
     for(this.i=0;this.i<this.data.length;this.i++){
       deact(this.data[this.i])
     }
   
    }
    else{
      this.detpoint.point=this.detpoint.point-this.sum;
      this.final=this.detpoint.point
      console.log("det",this.detpoint.point,this.final);
      var ob=this.serv.pointupdate(this.order,this.final,this.email1)
      ob.subscribe((response) => {
        this.res=response
      })
      this.snak.open('Your Order has been placed','OK',{
        duration:3000
       });
      //  for(this.i=0;this.i<this.data.length;this.i++){
      //   deact(this.data[this.i])
      // }
    //alert("Your Order Has been Placed")
    }
  }
  ngOnInit() {
    try{
    this.serv.currentMessage1.subscribe(message => this.message = message)
    console.log("helllloooooooooooooo",this.message)
    this.email1=this.message
    this.emailNotFound=false;
    this.emailFound=true;
    console.log("else",this.emailFound,this.emailNotFound)
    let obs=this.serv.point(this.email1)
    obs.subscribe((response)=>{
     this.detpoint=response;
     console.log(this.detpoint)
     this.stat=true;
    })
    }catch{
      this.emailNotFound=true;
      this.emailFound=false;
      console.log("if",this.emailFound,this.emailNotFound)
    }
    
   

  }

}
