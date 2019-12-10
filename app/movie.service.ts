import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  uri='http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(`${this.uri}/movielists`);
  }

  getMoviesById(id){
    return this.http.get(`${this.uri}/movielists/${id}`);
  }

  addMovie(cid1,title,genre,language,image,video,rating,synopsis,price,duration){
    const movie={
      cid1:cid1,
      name:title,
      genre:genre,
      language:language,
      image:"../../assets/Uploads/"+title+".jpg",
      video:"../../assets/Uploads/"+title+"video.mp4",
      rating:rating,
      synopsis:synopsis,
      price:price,
      duration:duration
    };  
    console.log("serv",movie)
    const mov={
      cid:cid1,
      name:title,
      url:image
    }
    return this.http.post(`${this.uri}/movielists/add`,movie);
  }
   
  updateMovie(id,title,genre,language){
    const movie={
      name: title,
      genre:genre,
      language:language
    };
    return this.http.post(`${this.uri}/movielists/update/${id}`,movie);
  }

  deleteMovie(id){
    return this.http.get(`${this.uri}/movielists/delete/${id}`);
  }
  deleteMovieByName(name){
    return this.http.get(`${this.uri}/movielists/deletePoll/${name}`);
  }

  getUsers(){
    return this.http.get(`${this.uri}/users`);
  }
getid(){
  let obs=this.http.get("http://127.0.0.1:3000/id")
  console.log("serv",obs)
  return obs;
}
  getArchivedMovies(){
    return this.http.get(`${this.uri}/archives`);
  }
  getPolls(){
    console.log("serv")
    return this.http.get(`${this.uri}/polls`);
  }
  delPolls(){
    return this.http.get(`${this.uri}/pollsdelete`);
  }

}
