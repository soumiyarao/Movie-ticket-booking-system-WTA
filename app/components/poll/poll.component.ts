import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';
import { Router } from '@angular/router';
import { polls } from 'src/app/movie.model';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  polls: polls[];
  displayedColumns=['image','name','pollcount','actions'];
  constructor(private movieservice:MovieService, private router:Router) { }

  ngOnInit() {
    this.fetchPolls()
   
    }
  
    fetchPolls(){
      console.log("polllll")
      this.movieservice
        .getPolls()
        .subscribe((data:polls[])=>{
          this.polls=data;
          console.log('data requested in home component');
          console.log(this.polls);
        });
    }

    // deletePolls(){
    //   this.movieservice
    //     .delPolls()
    //     .subscribe((res)=>{
          
    //       console.log("res",res);
    //       this.fetchPolls();
    //     });
       
    // }
    deleteMovie(name)
    {
      this.movieservice.deleteMovieByName(name).subscribe(()=>{
        this.fetchPolls();
      });
    }
    
}
