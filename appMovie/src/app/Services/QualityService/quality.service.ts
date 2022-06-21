import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quality } from 'src/app/Models/quality';

@Injectable({
  providedIn: 'root'
})
export class QualityService {

  constructor(private http:HttpClient) {

  }

  get():Observable<Quality[]>{

    return  this.http.get<Quality[]>("http://localhost:3000/qualities")
  }

  post():Observable<Quality[]>{

    return  this.http.post<Quality[]>("http://localhost:3000/qualities",{
      genrename:"New Category"
    })
  }

  put(item:Quality):Observable<Quality>{


    return  this.http.put<Quality>("http://localhost:3000/qualities/"+item.id,item)

  }

  delete(item:any):Observable<any>{

    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // this.http.delete('https://jsonplaceholder.typicode.com/posts/1', { headers })


    return  this.http.delete<any>("http://localhost:3000/qualities/"+item.id,item)

  }
}
