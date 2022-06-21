import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/Models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) {

  }

  get():Observable<Genre[]>{

    return  this.http.get<Genre[]>("http://localhost:3000/genres")
  }

  post():Observable<Genre[]>{

    return  this.http.post<Genre[]>("http://localhost:3000/genres",{
      genrename:"New Category"
    })
  }

  put(genre:Genre):Observable<Genre>{


    return  this.http.put<Genre>("http://localhost:3000/genres/"+genre.id,genre)

  }

  delete(genre:any):Observable<any>{

    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // this.http.delete('https://jsonplaceholder.typicode.com/posts/1', { headers })


    return  this.http.delete<any>("http://localhost:3000/genres/"+genre.id,genre)

  }
}
