import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/Models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http:HttpClient) {

  }

  get():Observable<Language[]>{

    return  this.http.get<Language[]>("http://localhost:3000/languages")
  }

  post():Observable<Language[]>{

    return  this.http.post<Language[]>("http://localhost:3000/languages",{
      genrename:"New Category"
    })
  }

  put(item:Language):Observable<Language>{


    return  this.http.put<Language>("http://localhost:3000/languages/"+item.id,item)

  }

  delete(item:any):Observable<any>{

    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // this.http.delete('https://jsonplaceholder.typicode.com/posts/1', { headers })


    return  this.http.delete<any>("http://localhost:3000/languages/"+item.id,item)

  }
}
