import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImdbScore } from 'src/app/Models/ImdbScore';

@Injectable({
  providedIn: 'root'
})
export class ImdbScoreService {



  constructor(private http:HttpClient) {

  }

  get():Observable<ImdbScore[]>{

    return  this.http.get<ImdbScore[]>("http://localhost:3000/imdbscores")
  }

  post():Observable<ImdbScore[]>{

    return  this.http.post<ImdbScore[]>("http://localhost:3000/imdbscores",{
      genrename:"New Category"
    })
  }

  put(imdbscore:ImdbScore):Observable<ImdbScore>{


    return  this.http.put<ImdbScore>("http://localhost:3000/imdbscores/"+imdbscore.id,imdbscore)

  }

  delete(imdbscore:any):Observable<any>{

    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // this.http.delete('https://jsonplaceholder.typicode.com/posts/1', { headers })


    return  this.http.delete<any>("http://localhost:3000/imdbscores/"+imdbscore.id,imdbscore)

  }
}
