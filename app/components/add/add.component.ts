import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { MovieService } from './../../movie.service';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  selectedfile:File=null;
  selectedfilevideo:File=null;
  createForm: FormGroup;
id;
cid
  constructor(private movieservice:MovieService,private fb:FormBuilder,private router:Router,private http:HttpClient) {
    this.createForm=this.fb.group({
      title:['',Validators.required],
      genre:'',
      language: '',
      image:'',
      video:'',
      rating:'',
      synopsis:'',
      cid1:'',
      price:'',
      duration:''
    });
   }

   addMovie(title,genre,language,synopsis,price,image,video,rating,cid1,duration){
     console.log("title",title)
     console.log("genre",genre)
     console.log("lang",language)
   
     const fd=new FormData();
     console.log(this.selectedfile.name);
     
     fd.append('image',this.selectedfile,title+".jpg");
     
     
     console.log(fd)
     this.http.post('http://127.0.0.1:3000/api/upload',fd).subscribe(res=>{
     console.log(res)
     });
     
     const fd1=new FormData();
     console.log(this.selectedfilevideo.name);
     
     fd1.append('image',this.selectedfilevideo,title+"video.mp4");
     
     
     console.log(fd1)
     this.http.post('http://127.0.0.1:3000/api/upload',fd1).subscribe(res=>{
     console.log(res)
     });


     cid1=this.cid
     rating=4;
     duration='2h 2m';
     this.movieservice.addMovie(cid1,title,genre,language,image,video,rating,synopsis,price,duration).subscribe((res)=>{
       console.log(res)
     
     });
     this.router.navigate(['/home']);
   }
  ngOnInit() {
    var ob=this.movieservice.getid()
    ob.subscribe((response) => {
      this.id=response
      console.log("oninit",this.id.id)
      this.cid=this.id.id
    })
  }

  onfileselect(event){
    this.selectedfile=<File>event.target.files[0];
  }
  onfileselectvideo(event){
    this.selectedfilevideo=<File>event.target.files[0];
  }
 
}
