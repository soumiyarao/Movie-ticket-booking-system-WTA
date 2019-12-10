import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../movie.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {users} from '../../movie.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  users: users[];
  displayedColumns=['fullName','email'];

  constructor(private movieservice:MovieService, private router:Router,private route:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit() {
    this.fetchUsers();
    }

    fetchUsers(){
      this.movieservice
        .getUsers()
        .subscribe((data:users[])=>{
          this.users=data;
          console.log('data requested in profile component');
          console.log(this.users);
        });
    }

  }


