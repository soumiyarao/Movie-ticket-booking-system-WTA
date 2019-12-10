import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { User, userlogin } from './user.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User = {
    fullName: '',
    email: '',
    password: ''
  };
  userforlogin:userlogin={
    email: '',
    password: ''
  };
  
  constructor( private http: HttpClient) { }
  private messageSource1;
  currentMessage1;
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
    
  }
  postUserforlogin(loginuser:userlogin){
    return this.http.post(environment.apiBaseUrl+'/login',loginuser);
  }

  email(mes:any)
  {
  // console.log("mes email",mes);
   this.messageSource1 = new BehaviorSubject(mes);
  this.currentMessage1 = this.messageSource1.asObservable();
  console.log("email",this.currentMessage1,this.messageSource1)
  }

}
