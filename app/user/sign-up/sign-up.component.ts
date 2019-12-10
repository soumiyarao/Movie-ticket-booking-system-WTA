import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  genres=[
    {id:1,name:"Comedy"},
    {id:2,name:"Thriller"},
    {id:3,name:"Action"}
  ];
  constructor(private userService:UserService,private router:Router,private data:DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    this.userService.postUser(form.value).subscribe(
      res=>{
        if(res=="Email is already registered.")
        {
          this.serverErrorMessages="Email is already registered.";
          console.log(this.serverErrorMessages);
        }
        else
        {
        this.showSuccessMessage=true;
        setTimeout(()=>this.showSuccessMessage=false,4000);
       
        this.data.email(form.controls["email"].value);
        this.resetForm(form);
       
        this.router.navigate(['/display']);
        }
      },
      err=>{
        if(err.status==422){
          this.serverErrorMessages=err.error.join('<br/>');
        }
        else{
          
          this.serverErrorMessages='Something went wrong.Please contact admin.';
        }
      }

    );
  }

  resetForm(form:NgForm){
    this.userService.selectedUser={
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages='';
  }
}
