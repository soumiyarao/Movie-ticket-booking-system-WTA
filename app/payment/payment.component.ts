import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { DataService } from '../data.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 details;
 fn;
 email
 email1
 message
 price;
 status:boolean=false;
  constructor(private serv:DataService,private rout:Router) { }

delete(){
  let obs=this.serv.del()
  obs.subscribe((response)=>{
   
   console.log(response);
   this.rout.navigate(['/display'])
  })
}

  check(form:NgForm){
    //this.fn=form.controls["firstname"].value;
    this.email=this.email1
    
     console.log("check",form.controls["cardname"].errors,form.controls["cardnumber"].errors,form.controls["expmonth"].errors,form.controls["expyear"].errors,form.controls["cvv"].errors);
     if(form.controls["cardname"].errors!=null||form.controls["cardnumber"].errors!=null||form.controls["expmonth"].errors!=null||form.controls["expyear"].errors!=null||form.controls["cvv"].errors!=null){
       this.status=true;
       alert("Enter all fields")
       console.log("st",this.status)
     }
     else{
        console.log("Else")
    //console.log("check",form.controls["email"].value)
    let obs=this.serv.pay(this.price,this.email)
    obs.subscribe((response)=>{
     this.details=response;
     console.log("det",this.details);
    })
    alert("Your Booking Has been Confirmed")
     this.rout.navigate(['/display'])
   }
  }
  ngOnInit() {
    this.serv.currentMessage1.subscribe(message => this.message = message)
    console.log("helllloooooooooooooo",this.message)
    this.email1=this.message
    console.log(this.email1)
    this.serv.currentMessage2.subscribe(message => this.message = message)
    console.log("helllloooooooooooooo",this.message)
    this.price=this.message
    console.log(this.price)
  }

}
