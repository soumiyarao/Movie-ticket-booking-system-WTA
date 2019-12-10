import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {DisplayComponent} from '../display/display.component';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { UserService } from '../shared/user.service';

declare function change(row,col): any; 
declare function selected(seatarray): any; 
//declare function active(num): any; 
@Component({
  selector: 'app-seatmatrix',
  templateUrl: './seatmatrix.component.html',
  styleUrls: ['./seatmatrix.component.css']
})

export class SeatmatrixComponent implements OnInit {
message;
cleanarray
details
billstatus;
date:Date;
arr:String[]=[]
currentdate;
datearray:Number[]=[];
seatnoarr:String[]=[];
status:boolean=true;
stat:boolean=true;
blurstat:boolean
row
row1;
prevselectdate
flag:boolean=false;
// row1=5
// col=6
column
column1
rowselect:string[]=[]
colselect:string[]=[]
len;
time;
dateselect;
seat;
numb;
id;
email;
price;
obs;
priceget
emailFound:boolean=false;
emailNotFound:boolean=false;
// i:number=5;
// j:number=6;
  constructor(private data:DataService,private router:Router,private user:UserService) { }
  datedisplay(num:any)
  {
     //active(num);
    if(this.arr.length!=0){
      alert("Changes are not saved")  //use confirm box(seat text file)
      this.arr.splice(0,this.arr.length);
      console.log("arrr",this.arr)
      this.len=0;
    }
    this.stat=false;
    this.blurstat=true;
   
    console.log(num);
    this.status=true;
   //this.dateselect=this.numb;
    this.dateselect=num;
    let obs=this.data.getseat(this.dateselect,this.time,this.id)
    obs.subscribe((response)=>{
    this.seat=response;
    console.log(this.seat)
    selected(this.seat);
    //this.prevselectdate=num;
    
})
    
   

   //this.stat=false;
  }
  selectChangeHandler (event: any) {
    if(this.arr.length!=0){
      alert("Changes are not saved")
      this.arr.splice(0,this.arr.length);
      console.log("arrr",this.arr);
      this.len=0;
    }
    //update the ui
    this.stat=false;
   this.blurstat=true;
    console.log("Time",event.target.value)
    this.time=event.target.value;           //default value for 9.00 am
    this.data.getseat(this.dateselect,this.time,this.message)
    let obs=this.data.getseat(this.dateselect,this.time,this.message)
  obs.subscribe((response)=>{
     this.seat=response;
     console.log(this.seat)
     selected(this.seat);
  })
  
  }
 
  // seat(){
  //   change(this.row1,this.col);
  // }
  // time(val:any){
  //  console.log("Time",val)
   seatno(row,column){
     
   this.billstatus=true;
     console.log("row",row);
     console.log("column",column)
    
     this.arr =change(row,column)
     console.log("arr comp",this.arr)
     this.cleanarray = this.arr.filter(function () { return true });

console.log(this.cleanarray);
     this.len=this.cleanarray.length;
     this.price=this.len*this.priceget;
     
   }
   checkout(){
     console.log("date",this.dateselect);
     console.log("time",this.time);
     console.log("seatno",this.arr)
     console.log("Movieid",this.message)
     console.log("price",this.price)
     this.data.price(this.price);

  this.data.currentMessage.subscribe(message => this.message = message)

     this.cleanarray = this.arr.filter(function () { return true });
     let obs=this.data.seatentry(this.email,this.dateselect,this.time,this.cleanarray,this.id)
     obs.subscribe((response)=>{
      this.details=response;
      this.arr.splice(0,this.arr.length);
      console.log("arrr",this.arr);
      this.len=0;
      if(this.arr.length==0){
     this.router.navigate(['/payment']);
      }
   })
   
  }

  // }
  ngOnInit() {

    

   try{
   
    this.row = Array(8).fill(0).map((x,i)=>i);
    this.column = Array(16).fill(0).map((x,i)=>i);
    console.log(this.row,this.column)
    this.data.currentMessage.subscribe(message => this.message = message)
    console.log("hellll",this.message)
this.id=this.message
    this.data.currentMessage1.subscribe(message => this.message = message)
    console.log("helllloooooooooooooo",this.message)
    this.email=this.message
    this.emailNotFound=false;
    this.emailFound=true;

    var ob=this.data.getprice(this.id)
    ob.subscribe((response) => {
      this.priceget=response
      this.priceget=this.priceget.price
      console.log("priceget",this.priceget)
    })




    this.date=new Date();
    
    this.currentdate=this.date.getDate()
    console.log(this.currentdate)
    for(var i=0;i<5;i++){
      if (this.currentdate==32){
            this.currentdate=1;
      }
      this.datearray[i]=this.currentdate   //handle for months
    
      this.currentdate=this.currentdate+1;
    }
    console.log("datearray",this.datearray)
  }catch{
    this.emailNotFound=true;
    this.emailFound=false;
    console.log("if",this.emailFound,this.emailNotFound)
  }
  }
  
  

}
