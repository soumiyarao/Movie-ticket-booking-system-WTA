import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../movie.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {archives} from '../../movie.model';

@Component({
  selector: 'app-archived-movies',
  templateUrl: './archived-movies.component.html',
  styleUrls: ['./archived-movies.component.css']
})
export class ArchivedMoviesComponent implements OnInit {

  archives:archives[];
  displayedColumns=['name','genre','language'];

  constructor(private movieservice:MovieService, private router:Router,private route:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit() {
    this.fetchArchives();
  }

  fetchArchives()
  {
    this.movieservice
      .getArchivedMovies()
      .subscribe((data:archives[])=>{
        this.archives=data;
        console.log('data requested in home component');
        console.log(this.archives);
      })
  }

}
