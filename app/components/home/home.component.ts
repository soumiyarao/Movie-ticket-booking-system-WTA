import { MovieService } from './../../movie.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material'; 

import {movie} from '../../movie.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    movie:movie[];
    displayedColumns=['name','genre','language','actions'];

  constructor(private movieservice:MovieService, private router:Router) { }

  ngOnInit() {
    this.fetchMovies();

  }

  fetchMovies(){
    this.movieservice
      .getMovies()
      .subscribe((data:movie[])=>{
        this.movie=data;
        console.log('data requested in home component');
        console.log(this.movie);
      });
  }

  editMovie(id){
    this.router.navigate([`/edit/${id}`]);
  }
  deleteMovie(id)
  {
    this.movieservice.deleteMovie(id).subscribe(()=>{
      this.fetchMovies();
    });
  }
}
