import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {


   private messageSource; private messageSource1;private messageSource2;
   currentMessage;currentMessage1;currentMessage2;
  

  constructor(private http:HttpClient) { }
  getseat(date,time:string="morn",mov){
    let obs=this.http.post("http://127.0.0.1:3000/seatget",{'date':date,'time':time,'mov':mov})
    return obs;
  }
  book(mes:any)
  {
   console.log("mes",mes);
   this.messageSource = new BehaviorSubject(mes);
  this.currentMessage = this.messageSource.asObservable();
  console.log("book",this.currentMessage,this.messageSource)
  }

  display(){
    let obs=this.http.get("http://127.0.0.1:3000/display")
    return obs;
  }
  detail(data:number){
    console.log("data",data)
    let obs=this.http.post("http://127.0.0.1:3000/detail",{'data':data})
    return obs;
  }
  seatentry(email,date,time:string="morn",arr,mov){
    let obs=this.http.post("http://127.0.0.1:3000/seatentry",{'email':email,'date':date,'time':time,'arr':arr,'mov':mov})
    return obs;
  }

  pay(name,email){
    let obs=this.http.post("http://127.0.0.1:3000/payment",{'name':name,'email':email})
    return obs;
  }
  popularimage(){
    console.log("pop")
    let obs=this.http.get("http://127.0.0.1:3000/img")
    return obs;
  }
  imgpoll(data:number){
    console.log("data",data)
    let obs=this.http.post("http://127.0.0.1:3000/imgpoll",{'data':data})
    return obs;
  }
  pollupdate(data:any,index:any){
    let obs=this.http.post("http://127.0.0.1:3000/pollupdate",{'data':data,'index':index})
    return obs;
  }
  email(mes:any)
  {
  // console.log("mes email",mes);
   this.messageSource1 = new BehaviorSubject(mes);
  this.currentMessage1 = this.messageSource1.asObservable();
  console.log("email",this.currentMessage1,this.messageSource1)
  }
  price(mes:any)
  {
  // console.log("mes email",mes);
   this.messageSource2 = new BehaviorSubject(mes);
  this.currentMessage2 = this.messageSource2.asObservable();
  console.log("email",this.currentMessage2,this.messageSource2)
  }
  point(email:string){
    let obs=this.http.post("http://127.0.0.1:3000/points",{'email':email})
    return obs;
  }
  del(){
    let obs=this.http.get("http://127.0.0.1:3000/deletelastrow")
    return obs;
  }
  getprice(mid){
    let obs=this.http.post("http://127.0.0.1:3000/getprice",{'name':mid})
    return obs;
  }
  pointupdate(order:any,point:any,email:any){
    console.log("serv",point)
    let obs=this.http.post("http://127.0.0.1:3000/pointupdate",{'order':order,'email':email,'point':point})
    return obs;
  }
}
