import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function showSlides(): any; 
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private router:Router) { }
  disp(){
    console.log("Inside");
    this.router.navigate(['/display']);
  }

  ngOnInit() {
    showSlides();
  }

}
