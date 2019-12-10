import { movie } from './../../movie.model';
import { MovieService } from './../../movie.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

 id:String;
 movie:any={};
  updateForm:FormGroup;

  constructor(private movieservice:MovieService, private router:Router,private route:ActivatedRoute, private snackBar:MatSnackBar, private fb:FormBuilder) { 
    this.createForm();
  }
 

 createForm(){
    this.updateForm=this.fb.group({
      name:['',Validators.required],
      genre:'',
      language:''
    });
  }

  ngOnInit() {
    console.log('inside on init');
    this.route.params.subscribe(params =>{
      this.id=params.id;
      this.movieservice.getMoviesById(this.id).subscribe(res=>{
        this.movie=res;
        this.updateForm.get('name').setValue(this.movie.name);
        this.updateForm.get('genre').setValue(this.movie.genre);
        this.updateForm.get('language').setValue(this.movie.language);
        console.log('::',this.updateForm.get('name'));

      });
    });
  }

  updateMovie(title,genre,language){
    console.log("title",title,"lang",language,"genre",genre,"id",this.id)
    this.movieservice.updateMovie(this.id,title,genre,language).subscribe(()=>{
       this.snackBar.open('movie updated successfully','OK',{
        duration:3000
       });
    });
  }
}
