import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publish } from 'src/app/Models/publish';

@Injectable({
  providedIn: 'root'
})
export class PublishService {



  constructor(private http:HttpClient) {

  }

  get():Observable<Publish[]>{

    return  this.http.get<Publish[]>("http://localhost:3000/publishes")
  }

  post():Observable<Publish[]>{

    return  this.http.post<Publish[]>("http://localhost:3000/publishes",{
      genrename:"New Category"
    })
  }

  put(publish:Publish):Observable<Publish>{


    return  this.http.put<Publish>("http://localhost:3000/publishes/"+publish.id,publish)

  }

  delete(publish:any):Observable<any>{

    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // this.http.delete('https://jsonplaceholder.typicode.com/posts/1', { headers })


    return  this.http.delete<any>("http://localhost:3000/publishes/"+publish.id,publish)

  }
}
