import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from './../../shared/user.service';
import {Router} from "@angular/router"
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[UserService]
})
export class SignInComponent implements OnInit {
  emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage1: string;
  serverErrorMessages1: string;
  invalidpassword:string;
message
  constructor(private userService:UserService,private router: Router,private data:DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(form.controls["email"].value=="admin@gmail.com"&&form.controls["password"].value=="admin123"){
     this.router.navigate(['/admin']);
    }
    else{
    this.userService.postUserforlogin(form.value).subscribe(
      res=>{
        console.log("resssss",res)
        if(res=="invalid password")
          this.invalidpassword="Invalid Password";
         if(res=="yes!"){
          this.showSuccessMessage1="User Verfified!";
          console.log("Sigh innnnnn",form.controls["email"].value)
          this.data.email(form.controls["email"].value);
  //this.data.currentMessage1.subscribe(message => this.message = message)
  console.log(this.message)
          this.router.navigate(['/display']);
        
          
        }  
         if(res=="user not registered"){
          this.serverErrorMessages1="Not Registered.";
          this.router.navigate(['/login']);
         }
        //this.showSuccessMessage=true;
        //setTimeout(()=>this.showSuccessMessage1,40000);
        //this.resetForm(form);
        console.log("res",res);
        
      },
      err=>{
        if(err.status==422){
          this.serverErrorMessages1=err.error.join('<br/>');
          console.log(err.error);
        }
        else{
          this.serverErrorMessages1='Something went wrong.Please contact admin.';
          console.log(err);
          console.log('Something went wrong.Please contact admin.');
        }
      }

    );
    }
  }

  resetForm(form:NgForm){
    this.userService.userforlogin={
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages1='';
  }


}
